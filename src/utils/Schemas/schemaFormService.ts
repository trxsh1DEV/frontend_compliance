import { z } from "zod";
import { descriptionType, scoreType } from "./genericForm";

export const schemaServices = z.object({
  enabled: z.boolean(),
  email: z.boolean(),
  fileserver: z.boolean(),
  intranet: z.boolean(),
  sites: z.boolean(),
  erp: z.boolean(),
  database: z.boolean(),
  servers: z.boolean(),
  score: scoreType.min(1, "Maior que 0"),
  description: descriptionType,
  isEditable: z.boolean(),
});
