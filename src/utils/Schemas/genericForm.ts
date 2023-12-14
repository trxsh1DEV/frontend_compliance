import { z } from "zod";

export const scoreType = z
  .number({
    invalid_type_error: "Insira um número válido",
  })
  .positive("Informe um valor maior que 0")
  .max(10, "Informe um valor menor que 11");

export const descriptionType = z
  .string()
  .min(3, "Informe uma descrição válida")
  .optional();
