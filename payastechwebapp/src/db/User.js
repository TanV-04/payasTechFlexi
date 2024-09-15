import { Schema, model } from "mongoose"; // imports mongoose library (popular odm)
// const bcrypt = require("bcrypt");
import { bcrypt } from "bcrypt";

// defining the schema (defines the structure of the documents within a collection)
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // confirmPassword: { type: String, required: true }, --> should never be stored
});

// hash the pw before saving it
userSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// to compare the pw
userSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

export default model("users", userSchema); // creates a mongoose model named users. a model is a constructor function that allows you to interact with the users collection in the mongoDb database.

// this is defining a mongoose schema and model for a User collection in mongodb
//
