import { HttpError } from "../../helpers/index.js";
import Order from "../../models/Order.js";

const getOrders = async (req, res) => {
  const { _id: owner } = req.user;
  const orders = await Order.find({ owner }).sort({ createdAt: -1 }).limit(5);
  if (!orders) {
    throw HttpError(404, "Orders not found");
  }
  res.json({ orders });
};
export default getOrders;
