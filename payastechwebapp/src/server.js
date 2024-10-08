// below is a Express application, which is build on top of a Node.js application
// Express provides a more straightforward API for routing and handling HTTP requests

// import modules
require("dotenv").config();
const cors = require("cors"); // import cors (cross origin resource sharing) package --> without it, any malicious website could make requests to another site on behalf of the user. cors allows servers to specify which domains are permitted to access their resources.
const express = require("express"); // express.js library (helps you build web servers and APIs)
const mongoose = require("mongoose"); // mongoose library for interacting with mongoDB from node.js
const jwt = require("jwt-simple");
const bodyParser = require("body-parser");
require("./db/config"); // import and run the module that configures the connection to the mongoDB database
const User = require("./db/User"); // imports a mongoose model for users; typically used for defining a schema and interacting with user data in the database
const rateLimit = require("express-rate-limit");
const nodemailer = require("nodemailer");

const limiter = rateLimit({
  windowsMs: 15 * 16 * 1000, // 15 mins
  max: 100, // limit each IP to 100 requests per windowMs
  message: "too many requests from this IP, please try again later.",
});
const app = express(); // initialize express application
app.use(express.json()); // parse incoming requests with JSON payloads and make parsed data available under req.body
app.use(cors()); // middleware for handling CORS error (feature in Express middleware)
app.use(limiter);
app.use(bodyParser.urlencoded({ extended: false }));

// connect to mongoDB
// mongoose
//   .connect("mongodb://localhost:27017/signIn", {
//     // establish connection to a mongoDB instance running on localhost at port 27017 using the database signIn
//   })
//   .then(() => console.log("Connected to MongoDB")) // log msg if connection is successful
//   .catch((err) => console.error("Could not connect to MongoDB...", err)); // log error if connection fails

mongoose
  .connect("mongodb://localhost:27017/signIn")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

// access the mongoDB connection using process.env

// const uri = process.env.MONGODB_URI;
// mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log("MongoDB connected")).catch(err => console.error("mongoDb connection error: ", err));

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
  console.log(req.body);
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

// display a form that asks the user for their email address
app.post("/ForgotPassword", async function (req, res) {
  const { email } = req.body;
  if (!email) { // if the body is empty
    return res.status(400).json({ error: "Email is required" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "user not found." });
    }
    const payload = { userId: user._id };
    const secret = process.env.JWT_SECRET || "fe1a1915a379f3be5394b64d14794932";
    const token = jwt.encode(payload, secret); // the token is generated using jwt.encode. it creates a signed jwt, taking the payload and secret key as params
    const resetPasswordUrl = `http://localhost:3000/ResetPassword/${token}`;
    // sendEmail(user.email, `http://yourApp.com/resetPassword${token}`);

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    // Create the email content
    const mailOptions = {
      from: "aretanvi@gmail.com", // change to company email
      to: user.email,
      subject: "Password Reset Request",
      text: `You requested a password reset. Click the link below to reset your password:\n\n 
    ${resetPasswordUrl}\n\n
                 If you did not request this, please ignore this email.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error in sending email: ", error);
        return res
          .status(500)
          .json({ error: "Error sending email. Please try again later." });
      } else {
        console.log("Email sent" + info.response);
        res.status(200).json({ message: "password reset email sent" });
      }
    });

    //res.status(200).json({ message: "password reset email sent" });
  } catch (error) {
    console.error("Error during password reset", error);
    return res.status(500).json({ error: "internal server error" });
  }
});

app.post("/ResetPassword/:token", async (req, res) => {
  console.log("request body: ", req.body);

  const { token } = req.params;
  const { newPassword } = req.body;

  console.log("generated token: ", token);

  if (!newPassword) {
    return res.status(400).json({ error: "new password is required." });
  }
  try {
    const secret = process.env.JWT_SECRET || "fe1a1915a379f3be5394b64d14794932"; // retrieve a secret key from the env variables. this key is used to sign the jwt to ensure its integrity. if the key isnt set in the env, a default secret is used.
    const decoded = jwt.decode(token, secret);
    const user = await User.findById(decoded.userId); // find the user by ID
    console.log("decoded token: ", decoded);
    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }
    user.password = newPassword; // the new password is assigned here
    await user.save(); // this live saves the updated user information to the db

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: "aretanvi@gmail.com", // specify the sender's email address
      to: user.email, // recipient's email address, taken from the user object
      subject: "Password reset successful",
      text: `Hello ${user.name},\n\nYour password has been successfully reset.\n\nIf you did not perform this action, please contact our support team immediately.\n\nBest Regards,\nPayas Technologies`,
    };

    // instance of the nodemailer configured to send emails
    transporter.sendMail(mailOptions, (error, info) => { // callback function that gets executed once the sendMail operation is complete
      if (error) { // if error occurs during sending email, this parameter contains error information
        console.error("Error in sending email: ", error);
        return res
          .status(500)
          .json({ error: "Error sending email. Please try again later." });
      } else { // if the email is sent successfully
        console.log("Email sent:", info.response);
        // Ensure this response is only sent once
        return res.status(200).json({ message: "password reset email sent" });
      }
    });

    //res.status(200).json({ message: "password updated successfully" });
  } catch (error) {
    console.error("error during password reset", error);
    return res.status(500).json({ error: "internal server error" });
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
