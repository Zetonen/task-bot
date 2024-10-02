import { ctrlWrapper } from "../decorators/index.js";
import { startBot, addPhone, addName, addCity } from "./auth/index.js";
export default {
  startBot: ctrlWrapper(startBot),
  addPhone: ctrlWrapper(addPhone),
  addName: ctrlWrapper(addName),
  addCity: ctrlWrapper(addCity),
};
