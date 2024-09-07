const mongoose = require("mongoose");

// mongoDB url connection
mongoose.connect("mongodb://localhost:27017/signIn", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
