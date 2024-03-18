import { z } from "zod";
import { OptionsBoolean, descriptionType, scoreType } from "./genericForm";

export const schemaFirewall = z.object({
  enabled: z.boolean(),
  nextGeneration: OptionsBoolean,
  troughput: OptionsBoolean,
  documentedRules: OptionsBoolean,
  failOver: OptionsBoolean,
  loadBalance: OptionsBoolean,
  highAvailability: OptionsBoolean,
  monitoring: OptionsBoolean,
  links: z.object({
    qtde: z.number().min(1, "Firewall deve ter no mínimo um link"),
    score: scoreType,
  }),
  vpn: OptionsBoolean,
  license: z.object({
    expired_at: z.coerce
      .date()
      .min(new Date(), "Data tem que ser maior que a atual"),
    score: scoreType,
  }),
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
