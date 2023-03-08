import { Router } from "express";
import { createCategoryController, listCategoriesAndRealEstatesController, listCategoriesController } from "../controllers/category.controllers";
import { ensureCategoryExistsMiddleware } from "../middlewares/ensureCategoryExists.middleware";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { ensureIsAdminMiddleware } from "../middlewares/ensureIsAdmin.middleware ";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { categorySchema } from "../schemas/category.schemas";

export const categoryRoutes: Router = Router();

categoryRoutes.post(
  "",
  ensureDataIsValidMiddleware(categorySchema),
  ensureTokenIsValidMiddleware,
  ensureIsAdminMiddleware,
  ensureCategoryExistsMiddleware,
  createCategoryController
);

categoryRoutes.get("", listCategoriesController);

categoryRoutes.get("/:id/realEstate",  listCategoriesAndRealEstatesController)
