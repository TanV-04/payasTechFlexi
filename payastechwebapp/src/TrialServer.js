// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();

// // Connect to MongoDB
// const connectDB = async () => {
//   try {
//     // Connecting to the 'school' database
//     await mongoose.connect("mongodb://localhost:27017/school");
//     console.log("Connected to MongoDB");

//     // Define the schema for the 'students' collection
//     const studentSchema = new mongoose.Schema({
//       name: String,
//       age: Number,
//       cgpa: Number,
//       fullTime: Boolean,
//     });

//     // Create a model for the 'students' collection
//     const Student = mongoose.model("Student", studentSchema);

//     // Fetch all documents from the 'students' collection
//     const data = await Student.find();
//     console.warn(data);
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// };

// connectDB();

// Uncomment to add a basic route
// app.get("/", (req, resp) => {
//   resp.send("App is working...");
// });

// Uncomment to start the server
// app.listen(5000, () => {
//   console.log("Server started on port 5000");
// });
