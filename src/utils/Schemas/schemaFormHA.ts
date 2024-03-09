import { z } from "zod";
import { descriptionType, scoreType } from "./genericForm";

export const schemaHA = z.object({
  ha: z
    .object({
      enabled: z.boolean(),
      solutions: z
        .number({ invalid_type_error: "Insira um número válido" })
        .min(1),
      tested: z.boolean(),
      rto: z.number(),
      score: scoreType,
      description: descriptionType,
      isEditable: z.boolean(),
    })
    .superRefine((values, ctx) => {
      if (values.tested && values.rto <= 0) {
        ctx.addIssue({
          path: ["rto"],
          code: z.ZodIssueCode.too_small,
          minimum: 0,
          type: "number",
          inclusive: true,
          message: "Insira um valor maior que 0",
        });
      } else if (values.enabled && values.score <= 0) {
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
      solutions: fields.solutions,
      tested: fields.tested,
      rto: fields.tested ? fields.rto : 0,
      score: fields.score,
      description: fields.description,
      isEditable: fields.isEditable,
    })),
});
