import { z } from "zod";

export const scoreType = z
  .number({
    invalid_type_error: "Insira um número válido",
  })
  .max(10, "Informe um valor menor que 11");

export const descriptionType = z.optional(z.string());
