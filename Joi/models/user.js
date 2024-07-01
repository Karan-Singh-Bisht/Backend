const mongoose = require("mongoose");
const Joi = require("joi");

mongoose.connect("mongodb://127.0.0.1:27017/joivalidation");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 20,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 120,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Invalid email address"],
  },
  contact: {
    type: Number,
    required: true,
    minlength: 10,
    maxlength: 15,
  },
});

function validateModel(data) {
  const userSchemaJoi = Joi.object({
    username: Joi.string().alphanum().min(5).max(20).required(),

    name: Joi.string().required(),

    age: Joi.number().integer().min(18).max(120).required(),

    email: Joi.string() //Email validator for com and net
      .email()
      .custom((value, helpers) => {
        const regex = /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+(com|net)$/i;
        if (!regex.test(value)) {
          return helpers.message("only.com and .net domains are allowed");
        }
        return value;
      })
      .required(),

    contact: Joi.number().min(10).integer().required(),
  }).messages({
    //Default email validation error message
    "string.email": "Enter a valid email address",
  });
  let { error } = userSchemaJoi.validate(data);
  return error;
}

let userModel = mongoose.model("User", userSchema);

module.exports = { validateModel, userModel };
