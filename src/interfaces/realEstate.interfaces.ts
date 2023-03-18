import { z } from "zod";
import { addressSchema } from "../schemas/address.schema";
import { realEstateSchema, realEstateSchemaResult } from "../schemas/realEstate.schemas";

export type IRealEstate = z.infer<typeof realEstateSchema>;
export type IRealEstateResult = z.infer<typeof realEstateSchemaResult>;
export type IAddress = z.infer<typeof addressSchema>;






