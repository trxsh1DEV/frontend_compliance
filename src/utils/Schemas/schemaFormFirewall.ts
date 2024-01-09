import { z } from "zod";
import { descriptionType, scoreType } from "./genericForm";

export const schemaFirewall = z.object({
  enabled: z.boolean(),
  manufacturer: z.enum([
    "Sophos",
    "Fortigate",
    "Mikrotik",
    "Cisco",
    "SonicWall",
    "PFsense",
    "None",
  ]),
  rules: z.enum(["Fraco", "Ok", "Bom", "None"]),
  segmentation: z.boolean(),
  vpn: z.enum(["Fraco", "Ok", "Bom", "None"]),
  ips: z.boolean(),
  backup: z.boolean(),
  restoration: z.boolean(),
  monitoring: z.boolean(),
  score: scoreType.min(1, "Maior que 0"),
  description: descriptionType,
  isEditable: z.boolean(),
});
