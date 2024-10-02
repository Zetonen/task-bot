import express from "express";
import cors from "cors";
import authRouter from "./routes/api/auth-router.js";
import actionRouter from "./routes/api/action-router.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json" with { type: "json" };

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  next();
});

app.use("/api/auth", authRouter);
app.use("/api/action", actionRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res) => {
  res.status(404).json({
    message: "Not Found",
  });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

export default app;
