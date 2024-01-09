import { z } from "zod";
import { descriptionType, scoreType } from "./genericForm";

export const schemaInventory = z.object({
  enabled: z.boolean(),
  devices: z.array(z.string()),
  contacts: z.boolean(),
  agentInventory: z.enum(["None", "Few", "Medium", "Many", "All"]),
  score: scoreType.min(1, "Maior que 0"),
  description: descriptionType,
  isEditable: z.boolean(),
});
