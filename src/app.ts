import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./middlewares/handleErrors.middlewares";
import { userRoutes } from "./routers/user.routes";
import { loginRoutes } from "./routers/login.routes";
import { categoryRoutes } from "./routers/category.routes";
import { realEstateRoutes } from "./routers/realEstate.routes";

const app: Application = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/categories", categoryRoutes);
app.use("/realEstate", realEstateRoutes)

app.use(handleErrors);

export default app;
