import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Category } from "../entities";
import { AppError } from "../error/error";

export const ensureCategoryExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const [categories, count] = await categoryRepository.findAndCount({
    where: {
      name: req.body.name,
    },
  });

  if (count > 0) {
    throw new AppError("Category already exists", 409);
  }
  return next();
};
