import { z } from "zod";
import { descriptionType, enumNoneAll, scoreType } from "./genericForm";

export const schemaSecurity = z.object({
  enabled: z.boolean(),
  antivirus: enumNoneAll,
  policyPassword: z.boolean(),
  accessAuditing: z.boolean(),
  gpo: z.enum(["Nenhuma", "Basica", "Avançada"]),
  lgpd: z.boolean(),
  score: scoreType.min(1, "Maior que 0"),
  description: descriptionType,
  isEditable: z.boolean(),
});
