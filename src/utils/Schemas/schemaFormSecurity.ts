import { z } from "zod";
import { OptionsBoolean, descriptionType } from "./genericForm";

export const schemaSecurity = z.object({
  enabled: z.boolean(),
  firewall: OptionsBoolean,
  antivirus: OptionsBoolean,
  identity_management: OptionsBoolean,
  mfa: OptionsBoolean,
  antispam: OptionsBoolean,
  access_control: OptionsBoolean,
  network_segmentation: OptionsBoolean,
  policy_password: OptionsBoolean,
  description: descriptionType,
  isEditable: z.boolean(),
});
