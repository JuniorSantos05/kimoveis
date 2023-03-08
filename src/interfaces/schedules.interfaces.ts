import { z } from "zod";
import { scheduleListSchema, scheduleSchema, scheduleSchemaResult } from "../schemas/schedules.schema";

export type ISchedulesRequest = z.infer<typeof scheduleSchema>
export type ISchedules = z.infer<typeof scheduleSchemaResult>
export type IScheduleRealEstateResult = z.infer<typeof scheduleListSchema>