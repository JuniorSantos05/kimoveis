import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../error/error";

export const ensureEmailExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUserEmail = await userRepository.find({
    where: {
      email: req.body.email,
    },
  });

  if (findUserEmail.length > 0) {
    throw new AppError("Email already exists");
  }

  return next();
};
