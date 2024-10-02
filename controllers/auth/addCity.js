import { HttpError } from "../../helpers/index.js";
import User from "../../models/User.js";

const addCity = async (req, res) => {
  const { city } = req.body;
  const { _id, city: userCity } = req.user;
  if (userCity) {
    throw HttpError(401, "The user already has a city");
  }
  const user = await User.findByIdAndUpdate(_id, { city });
  res.json({
    user,
    message: `Вітаємо, ${user.full_name}, чим я можу допомогти?`,
  });
};
export default addCity;
