const mongoose = require("mongoose");

const { Schema } = mongoose;

const formSchema = new Schema(
  {
    userId: String,
    formDetail: Object,
  },
  {
    timestamps: true,
  }
);

const Form = mongoose.model("Forms", formSchema, "Forms");

module.exports = Form;
