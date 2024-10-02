import User from "../../models/User.js";

const addPhone = async (req, res) => {
  const { phone } = req.body;
  const user = await User.findOne({ phone });
  if (user) {
    return res.json({
      user,
      message: `Вітаємо, ${user.full_name}, чим я можу допомогти?`,
    });
  }
  const newUser = await User.create({ phone });

  res.json({ message: "Вкажіть будь-ласка ваше ім'я та прізвище" });
};
export default addPhone;
