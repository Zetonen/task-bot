import { HttpError } from "../../helpers/index.js";
import User from "../../models/User.js";

const addName = async (req, res) => {
  const { full_name } = req.body;
  const { _id, full_name: userName } = req.user;
  if (userName) {
    throw HttpError(401, "The user already has a name");
  }
  await User.findByIdAndUpdate(_id, { full_name });
  res.json({ message: `Вкажіть будь-ласка місто в якому ви знаходитесь` });
};
export default addName;
