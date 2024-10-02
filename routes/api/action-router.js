import express from "express";
import actionController from "../../controllers/action-controller.js";
import { authenticate } from "../../middlewares/index.js";
const actionRouter = express.Router();

actionRouter.get(
  "/info-company",
  authenticate,
  actionController.getInfoCompany
);
actionRouter.get("/orders", authenticate, actionController.getOrders);

export default actionRouter;
