import { Router } from "express";
import { createShedulesController, listShedulesRealEstatesController } from "../controllers/schedules.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { ensureIsAdminMiddleware } from "../middlewares/ensureIsAdmin.middleware ";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { scheduleSchema } from "../schemas/schedules.schema";

export const schedulesRoutes: Router = Router();

schedulesRoutes.post(
"", 
ensureTokenIsValidMiddleware, 
ensureDataIsValidMiddleware(scheduleSchema),
createShedulesController
);

schedulesRoutes.get(
"/realEstate/:id", 
ensureTokenIsValidMiddleware, 
ensureIsAdminMiddleware,
listShedulesRealEstatesController
);
