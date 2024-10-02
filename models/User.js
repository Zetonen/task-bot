import { Schema, model } from "mongoose";
import Joi from "joi";
import { handleSaveError, preUpdate } from "./hooks.js";

const userSchema = new Schema(
  {
    full_name: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      unique: true,
      required: true,
    },
    city: {
      type: String,
      default: "",
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleSaveError);

userSchema.pre("findOneAndUpdate", preUpdate);

userSchema.post("findOneAndUpdate", handleSaveError);

export const userAddPhoneSchema = Joi.object({
  phone: Joi.number().min(6).required().messages({
    "string.min": "The phone number must contain at least 10 characters",
    "any.required": "The phone is required!",
  }),
});

export const userAddNameSchema = Joi.object({
  full_name: Joi.string()
    .required()
    .custom((value, helpers) => {
      if (value.trim().split(" ").length < 2) {
        return helpers.message("The full name must contain at least two words");
      }
      return value;
    })
    .messages({
      "any.required": "The full_name is required!",
    }),
});

export const userAddCitySchema = Joi.object({
  city: Joi.string().required().messages({
    "any.required": "The city is required!",
  }),
});

const User = model("user", userSchema);

export default User;
