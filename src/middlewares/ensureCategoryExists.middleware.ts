import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Category } from "../entities";
import { AppError } from "../error/error";

export const ensureCategoryExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);

  const findCategory = await categoryRepository.findOne({

    where: { id: parseInt(req.params.id) },
  });

  if (!findCategory) {
    throw new AppError("Category already exists", 409);
  }

  return next();
  
};
