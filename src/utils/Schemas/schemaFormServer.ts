import { z } from "zod";
import { descriptionType, scoreType } from "./genericForm";

const fieldsServerSchema = z.array(
  z.object({
    serverName: z.string().min(3, "O nome deve ser maior que 3"),
    systemOperation: z.object({
      patching: z.enum(["Regular", "Irregular"], {
        errorMap: () => {
          return { message: "Informe 'Regular' ou 'Irregular'" };
        },
      }),
      score: scoreType.positive("Informe um valor maior que 0"),
    }),
    config: z.object({
      level: z.enum(["low", "medium", "high"], {
        errorMap: () => {
          return { message: "Informe 'low'|'medium'|'high'" };
        },
      }),
      score: scoreType.positive("Informe um valor maior que 0"),
    }),
    monitoringPerformance: z
      .object({
        enabled: z.boolean(),
        score: scoreType,
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
      }),
    score: scoreType.positive("Informe um valor maior que 0"),
    description: descriptionType,
  })
);

export const schemaServer = z.object({
  server: z.object({
    enabled: z.boolean(),
    servers: fieldsServerSchema,
    description: z.string().min(3, "Insira uma descrição válida"),
    isEditable: z.boolean(),
  }),
});
