import { Request, Response, NextFunction } from "express";
import { AppError } from "../error/error";

export const ensureUpdateUserIsAdmin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  const userAdmin = req.user.admin;
  const userid = parseInt(req.params.id);

  if (!userAdmin && req.user.id !== userid) {
    throw new AppError("Insufficient permission", 403);
  }

  next();
  
};
