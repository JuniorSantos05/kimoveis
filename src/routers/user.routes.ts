import { Router } from "express";
import {
  createUserController,
  listUserController,
} from "../controllers/users.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { ensureEmailExistsMiddleware } from "../middlewares/ensureEmailExists.middleware";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { userSchema } from "../schemas/users.schemas";

export const userRoutes: Router = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSchema),
  ensureEmailExistsMiddleware,
  createUserController
);

userRoutes.get("", ensureTokenIsValidMiddleware, listUserController);
