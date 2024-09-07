// import modules
const express = require("express"); // express.js library (helps you build web servers and APIs)
const mongoose = require("mongoose"); // mongoose library for interacting with mongoDB from node.js
require("./db/config"); // import and run the module that configures the connection to the mongoDB database
const User = require("./db/User"); // imports a mongoose model for users; typically used for defining a schema and interacting with user data in the database

const app = express(); // initialize express application
app.use(express.json()); // parse incoming requests with JSON payloads and make pared data available under req.body

// connect to mongoDB
mongoose
  .connect("mongodb://localhost:27017/signIn", {
    // establish connection to a mongoDB instance running on localhost at port 27017 using the database signIn
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB")) // log msg if connection is successful
  .catch((err) => console.error("Could not connect to MongoDB...", err)); // log error if connection fails

// defining an endpoint for handling POST requests at /signUp
// create a route

app.post("/signUp", async (req, res) => {
  // define a POST route at /signUp endpoint. this function is called when a POST request is made to it.
  let user = new User(req.body);
  let result = await user.save();
  res.send(result);
  //res.send(req.body); // req is the request object, which contains the info about teh incoming request. res is the response object, which is used to send a response back to the client
});

// starts the Express server on port 5000
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});

// a mongoose model is a wrapper on a mongoose schema
// a mongoose schema defines the structure of the document, default values, validators, etc.
// a mongoose model provides an interface for creating, querying, updating, deleting records, etc.
