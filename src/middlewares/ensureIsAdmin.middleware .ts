import { NextFunction, Request, Response } from "express";
import { AppError } from "../error/error";

export const ensureIsAdminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (!req.user.admin) {
    throw new AppError("User is not authorized", 401);
  }
  return next();
};
