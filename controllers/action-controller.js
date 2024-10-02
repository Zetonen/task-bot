import { ctrlWrapper } from "../decorators/index.js";
import { getOrders, getInfoCompany } from "./action/index.js";
export default {
  getOrders: ctrlWrapper(getOrders),
  getInfoCompany: ctrlWrapper(getInfoCompany),
};
