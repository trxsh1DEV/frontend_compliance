import { z } from "zod";

export const fieldSchema = z.object({
  // enabled: z.boolean(),
  description: z
    .string()
    .min(3, "Por favor, informe uma descrição válida")
    .optional(),
  score: z
    .number({
      invalid_type_error: "Insira um número válido",
    })
    .positive("Por favor, informe um valor maior que 0")
    .max(10, "Menor que 10"),
  value: z.number().positive().optional(),
});

export const schema = z.object({
  // client: z.string(),
  backup: z.object({
    policy: fieldSchema,
    frequency: fieldSchema,
    storage: z.object({
      local: fieldSchema,
      remote: fieldSchema,
    }),
    restoration: fieldSchema,
  }),
});
