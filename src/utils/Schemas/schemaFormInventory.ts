import { z } from "zod";
import { descriptionType, enumNoneAll, scoreType } from "./genericForm";

export const schemaInventory = z.object({
  enabled: z.boolean(),
  devices: z.array(z.string()),
  contacts: z.boolean(),
  agentInventory: enumNoneAll,
  score: scoreType.min(1, "Maior que 0"),
  description: descriptionType,
  isEditable: z.boolean(),
});
