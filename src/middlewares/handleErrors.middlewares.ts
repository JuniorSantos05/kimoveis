import { AppError } from "../error/error";
import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

export const handleErrors = (
  err: any,
  req: Request,
  res: Response,
  _: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  if (err instanceof ZodError) {
    return res.status(400).json(err.flatten().fieldErrors);
  }

  console.log(err);

  return res.status(500).json({
    message: "Internal server error",
  });
};
