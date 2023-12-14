import { z } from "zod";
import { descriptionType, scoreType } from "./genericForm";

export const fieldsBackupSchema = z.object({
  enabled: z.boolean(),
  score: scoreType,
  value: z.number().positive().optional(),
  description: descriptionType,
});

export const schemaBackup = z.object({
  // client: z.string(),
  backup: z.object({
    frequency: fieldsBackupSchema,
    restoration: fieldsBackupSchema,
    policy: fieldsBackupSchema,
    storage: z.object({
      local: fieldsBackupSchema,
      remote: fieldsBackupSchema,
    }),
  }),
});

export const DefaultValuesBackup = {
  backup: {
    frequency: {
      score: 0,
      enabled: true,
    },
    policy: {
      score: 0,
      enabled: true,
    },
    restoration: {
      score: 0,
      enabled: true,
    },
    storage: {
      local: { score: 0, enabled: true },
      remote: { score: 0, enabled: true },
    },
  },
};
