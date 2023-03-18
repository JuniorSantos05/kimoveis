import * as z from "zod";

export const scheduleSchema = z.object({
    date: z.string().regex(/^\d{4}\/\d{2}\/\d{2}$/).min(10).max(10),
    hour: z.string().regex(/^\d{2}:\d{2}$/).min(5).max(5),
    realEstateId: z.number().int(),
  });


export const scheduleSchemaResult = scheduleSchema.extend({
    id: z.number()
})





