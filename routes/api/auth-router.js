import express from "express";
import { authenticate, isEmptyBody } from "../../middlewares/index.js";
import {
  userAddCitySchema,
  userAddNameSchema,
  userAddPhoneSchema,
} from "../../models/User.js";
import authController from "../../controllers/auth-controller.js";
import { validateBody } from "../../decorators/index.js";
const authRouter = express.Router();

authRouter.get("/start", authController.startBot);

authRouter.post(
  "/phone",
  isEmptyBody,
  validateBody(userAddPhoneSchema),
  authController.addPhone
);

authRouter.post(
  "/name",
  authenticate,
  isEmptyBody,
  validateBody(userAddNameSchema),
  authController.addName
);

authRouter.post(
  "/city",
  authenticate,
  isEmptyBody,
  validateBody(userAddCitySchema),
  authController.addCity
);

export default authRouter;
