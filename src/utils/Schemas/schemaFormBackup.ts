import { z } from "zod";
import { descriptionType, scoreType } from "./genericForm";

export const fieldsBackupSchema = z
  .object({
    enabled: z.boolean(),
    score: scoreType,
    // qtde: z.optional(z.number()),
    description: descriptionType,
  })
  .superRefine((values, ctx) => {
    if (values.enabled && values.score <= 0) {
      ctx.addIssue({
        path: ["score"],
        code: z.ZodIssueCode.too_small,
        minimum: 0,
        type: "number",
        inclusive: true,
        message: "Insira um valor maior que 0",
      });
    }
  })
  .transform((fields) => ({
    enabled: fields.enabled,
    score: fields.enabled ? fields.score : 0,
    description: fields.description,
  }));

export const BackupLocalRemoteSchema = z
  .object({
    enabled: z.boolean(),
    score: scoreType,
    qtde: z.number({
      invalid_type_error: "Insira um número válido",
    }),
    description: descriptionType,
  })
  .superRefine((values, ctx) => {
    if (values.enabled && values.score <= 0) {
      ctx.addIssue({
        path: ["score"],
        code: z.ZodIssueCode.too_small,
        minimum: 0,
        type: "number",
        inclusive: true,
        message: "Insira um valor maior que 0",
      });
    } else if (values.enabled && values.qtde <= 0) {
      ctx.addIssue({
        path: ["qtde"],
        code: z.ZodIssueCode.too_small,
        minimum: 0,
        type: "number",
        inclusive: true,
        message: "Insira um valor maior que 0",
      });
    }
  })
  .transform((fields) => ({
    enabled: fields.enabled,
    score: fields.enabled ? fields.score : 0,
    qtde: fields.enabled ? fields.qtde : 0,
    description: fields.description,
  }));

export const frequencySchema = z
  .object({
    enabled: z.boolean(),
    score: scoreType,
    level: z.optional(
      z.enum(["low", "medium", "high"], {
        errorMap: () => {
          return {
            message: "Informe 'low' | 'high'",
          };
        },
      })
    ),
    description: descriptionType,
  })
  .superRefine((values, ctx) => {
    if (values.enabled && values.score <= 0) {
      ctx.addIssue({
        path: ["score"],
        code: z.ZodIssueCode.too_small,
        minimum: 0,
        type: "number",
        inclusive: true,
        message: "Insira um valor maior que 0",
      });
    } else if (
      values.enabled &&
      values.level !== "low" &&
      values.level !== "medium" &&
      values.level !== "high"
    ) {
      ctx.addIssue({
        path: ["level"],
        code: z.ZodIssueCode.custom,
        message: `Informe 'low' | 'high'`,
      });
    }
  })
  .transform((fields) => ({
    enabled: fields.enabled,
    score: fields.enabled ? fields.score : 0,
    description: fields.description,
    level: fields.enabled ? fields.level : undefined,
  }));

export const schemaBackup = z.object({
  backup: z.object({
    enabled: z.boolean(),
    frequency: frequencySchema,
    storage: z.object({
      local: BackupLocalRemoteSchema,
      remote: BackupLocalRemoteSchema,
    }),
    restoration: fieldsBackupSchema,
    policy: fieldsBackupSchema,
    isEditable: z.boolean(),
  }),
});

// export type FormBackupProps = z.infer<typeof TypesValuesBackup>;
