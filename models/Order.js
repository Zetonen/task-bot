import { Schema, model } from "mongoose";
import { handleSaveError, preUpdate } from "./hooks.js";

const orderSchema = new Schema(
  {
    order_id: {
      type: String,
      default: "",
      unique: true,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    owner:{
      type: Schema.Types.ObjectId,
      ref: "user",
    }
  },
  { versionKey: false, timestamps: true }
);

orderSchema.post("save", handleSaveError);

orderSchema.pre("findOneAndUpdate", preUpdate);

orderSchema.post("findOneAndUpdate", handleSaveError);

const Order = model("order", orderSchema);

export default Order;
