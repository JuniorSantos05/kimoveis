import { Router } from "express";
import {
  createUserController,
  listUserController,
  updateUserController,
} from "../controllers/users.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { ensureEmailExistsMiddleware } from "../middlewares/ensureEmailExists.middleware";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureUserExistsMiddleware } from "../middlewares/ensureUserExists.middleware";
import { userSchema, userUpdateSchema } from "../schemas/users.schemas";

export const userRoutes: Router = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSchema),
  ensureEmailExistsMiddleware,
  createUserController
);

userRoutes.get("", listUserController); //FALTA VERIFICAÇÃO

userRoutes.patch(
  "/:id",
  ensureUserExistsMiddleware,
  ensureDataIsValidMiddleware(userUpdateSchema),
  ensureTokenIsValidMiddleware,
  updateUserController
);
