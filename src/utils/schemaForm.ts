import { z } from "zod";

export const fieldSchema = z.object({
  enabled: z.boolean(),
  score: z
    .number({
      invalid_type_error: "Insira um número válido",
    })
    .positive("Por favor, informe um valor maior que 0")
    .max(10, "Menor que 10"),
  value: z.number().positive().optional(),
  description: z
    .string()
    .min(3, "Por favor, informe uma descrição válida")
    .optional(),
});

export const schema = z.object({
  // client: z.string(),
  backup: z.object({
    frequency: fieldSchema,
    restoration: fieldSchema,
    policy: fieldSchema,
    storage: z.object({
      local: fieldSchema,
      remote: fieldSchema,
    }),
  }),
});

export const DefaultValues = {
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
