import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./middlewares/handleErrors.middlewares";
import { userRoutes } from "./routers/user.routes";

const app: Application = express();
app.use(express.json());

app.use("/users", userRoutes);

app.use(handleErrors);

export default app;
