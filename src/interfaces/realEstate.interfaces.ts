import { z } from "zod";
import { addressSchema } from "../schemas/address.schema";
import { realEstateSchemaReturn, realEstateSchema, realEstateSchemaResult, returnListRealEstateSchema } from "../schemas/realEstate.schemas";

export type IRealEstate = z.infer<typeof realEstateSchema>;
export type IRealEstateResult = z.infer<typeof realEstateSchemaReturn>;
export type IAddress = z.infer<typeof addressSchema>;



export type IListRealEstatesResult = z.infer<typeof returnListRealEstateSchema>;





