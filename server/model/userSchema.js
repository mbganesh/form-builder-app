const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    userName: String,
    email: String,
    password: String,
  },
  { timestamps: true }
);

const User = mongoose.model("Users", userSchema, "Users");

module.exports = User;
