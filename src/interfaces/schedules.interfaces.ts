import { z } from "zod";
import { scheduleSchema } from "../schemas/schedules.schema";

export type ISchedulesRequest = z.infer<typeof scheduleSchema>

