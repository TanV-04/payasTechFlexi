// below is a Express application, which is build on top of a Node.js application
// Express provides a more straightforward API for routing and handling HTTP requests

// import modules
const cors = require("cors"); // import cors (cross origin resource sharing) package --> without it, any malicious website could make requests to another site on behalf of the user. cors allows servers to specify which domains are permitted to access their resources.
const express = require("express"); // express.js library (helps you build web servers and APIs)
const mongoose = require("mongoose"); // mongoose library for interacting with mongoDB from node.js
require("./db/config"); // import and run the module that configures the connection to the mongoDB database
const User = require("./db/User").default; // imports a mongoose model for users; typically used for defining a schema and interacting with user data in the database
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowsMs: 15 * 16 * 1000, // 15 mins
  max: 100, // limit each IP to 100 requests per windowMs
  message: "too many requests from this IP, please try again later.",
});
const app = express(); // initialize express application
app.use(express.json()); // parse incoming requests with JSON payloads and make parsed data available under req.body
app.use(cors()); // middleware for handling CORS error (feature in Express middleware)
app.use(limiter);

// connect to mongoDB
mongoose
  .connect("mongodb://localhost:27017/signIn", {
    // establish connection to a mongoDB instance running on localhost at port 27017 using the database signIn
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB")) // log msg if connection is successful
  .catch((err) => console.error("Could not connect to MongoDB...", err)); // log error if connection fails

// below are routes/endpoints defined using methods provided by Express to handle different HTTP requests

// defining an endpoint for handling POST requests at /signUp (creates a new user)
// create a route for when a new user wants to register to the website. the client sends a POST request with user details. the server, after validation, saves this data to the database.
app.post("/signUp", async (req, res) => {
  // define a POST route at /signUp endpoint. this function is called when a POST request is made to it.
  // let user = new User(req.body);
  // let result = await user.save();
  // res.send(result);

  try {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ error: "All fields are required" });
    }
    if (password != confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match." });
    }

    const newUser = new User({ name, email, password });

    await newUser.save(); // save to mongoDB

    res.status(201).json({ message: "user created successfully" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "internal server error" });
  }

  //res.send(req.body); // req is the request object, which contains the info about the incoming request. res is the response object, which is used to send a response back to the client
});

// defining an endpoint for handling GET requests at /signIn (retrieves a user based on an email and password query parameter)
// sends a GET request with the email and password as query params. the server matches them against the data in the db
// app.get("/signIn", async (req, res) => {
//   const { email, password } = req.query;
//   try {
//     const user = await User.findOne({ email, password });

//     if (!email || !password) {
//       return res
//         .status(400)
//         .json({ error: "Email and password are required." });
//     }

//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     } else {
//       console.log("user found!");
//     }
//     res.json(user); // send user data as JSON response
//   } catch (error) {
//     return res.status(500).json({ error: "internal server error" });
//   }
// });

// Define a POST endpoint for sign-in (use POST for security reasons)
app.post("/signIn", async (req, res) => {
  const { email, password } = req.body; // Use req.body for POST request

  if (!email || !password) {
    return res.status(404).json({ error: "email and password are required." });
  }

  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // verify the user credentials and handle errors appropriately
    // if (user.password !== password) {
    //   return res.status(400).json({ error: "incorrect password" });
    // }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ error: "incorrect passwords" });
    }

    res.json(user); // send user data as JSON response
  } catch (error) {
    console.error("Internal server error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// starts the Express server on port 5000
// .listen() -> function provided by express.
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});

// a mongoose model is a wrapper on a mongoose schema
// a mongoose schema defines the structure of the document, default values, validators, etc.
// a mongoose model provides an interface for creating, querying, updating, deleting records, etc.


// cors video: https://www.youtube.com/watch?v=OBCZc-g4Fvc
