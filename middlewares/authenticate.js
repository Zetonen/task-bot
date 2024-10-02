import { HttpError } from "../helpers/index.js";
import { ctrlWrapper } from "../decorators/index.js";
import User from "../models/User.js";

const authenticate = async (req, res, next) => {
  const { phone } = req.query;
  if (!phone) {
    throw HttpError(401, "Not have authorization");
  }

  try {
    const user = await User.findOne({phone});
    if (!user) {
      throw HttpError(401, "user not found");
    }
    req.user = user;
    next();
  } catch (error) {
    throw HttpError(401, error.message);
  }
};
export default ctrlWrapper(authenticate);
