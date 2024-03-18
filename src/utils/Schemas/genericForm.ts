import { z } from "zod";

export const scoreType = z
  .number({
    invalid_type_error: "Insira um número válido",
  })
  .min(0, "Informe um valor maior que 0")
  .max(3, "Informe um valor menor que 3");

export const descriptionType = z.optional(z.string());
export const enumNoneAll = z.enum(["None", "Few", "Medium", "Many", "All"]);

export const OptionsBoolean = z.object({
  enabled: z.boolean(),
  score: scoreType,
});

export const OptionsString = z.object({
  label: z.string().min(3, "Deve conter mais de 3 caracteres"),
  score: scoreType,
});

export const OptionsNumber = z.object({
  size: z.number().min(0, "Deve ser maior que 1"),
  score: scoreType,
});
