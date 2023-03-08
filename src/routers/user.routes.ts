import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { ensureEmailExistsMiddleware } from "../middlewares/ensureEmailExists.middleware";
import { ensureIsAdminMiddleware } from "../middlewares/ensureIsAdmin.middleware ";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureUpdateUserIsAdmin } from "../middlewares/ensureUpdateUserIsAdmin.middleware";
import { ensureUserExistsMiddleware } from "../middlewares/ensureUserExists.middleware";
import { userSchema, updateUserSchema } from "../schemas/users.schemas";
import {
  createUserController,
  deleteUserController,
  listUserController,
  updateUserController,
} from "../controllers/users.controllers";

export const userRoutes: Router = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSchema),
  ensureEmailExistsMiddleware,
  createUserController
);

userRoutes.get(
  "",
  ensureTokenIsValidMiddleware,
  ensureIsAdminMiddleware,
  listUserController
);

userRoutes.patch(
  "/:id",
  ensureUserExistsMiddleware,
  ensureDataIsValidMiddleware(updateUserSchema),
  ensureTokenIsValidMiddleware,
  ensureUpdateUserIsAdmin,
  updateUserController
);

userRoutes.delete(
  "/:id",
  ensureUserExistsMiddleware,
  ensureTokenIsValidMiddleware,
  ensureIsAdminMiddleware,
  deleteUserController
);
