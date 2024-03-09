import { z } from "zod";
import { descriptionType, scoreType } from "./genericForm";

export const OptionsBoolean = z.object({
  enabled: z.boolean(),
  score: scoreType,
});

export const schemaFirewall = z.object({
  enabled: z.boolean(),
  nextGeneration: OptionsBoolean,
  troughput: OptionsBoolean,
  //
  description: descriptionType,
  isEditable: z.boolean(),
  // manufacturer: z.enum([
  //   "Sophos",
  //   "Fortigate",
  //   "Mikrotik",
  //   "Cisco",
  //   "SonicWall",
  //   "PFsense",
  //   "None",
  // ]),
  // rules: z.enum(["Fraco", "Ok", "Bom", "None"]),
  // segmentation: z.boolean(),
  // vpn: z.enum(["Fraco", "Ok", "Bom", "None"]),
  // ips: z.boolean(),
  // backup: z.boolean(),
  // monitoring: z.boolean(),
  // score: scoreType.min(1, "Maior que 0"),
});
