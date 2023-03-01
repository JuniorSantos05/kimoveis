import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";

export const ensureDataIsValidMiddleware =
  (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    const validateData = schema.parse(req.body);

    return next();
  };
