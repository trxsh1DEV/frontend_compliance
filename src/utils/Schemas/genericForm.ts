import { z } from "zod";

export const scoreType = z
  .number({
    invalid_type_error: "Insira um número válido",
  })
  .min(0, "Informe um valor maior que 0")
  .max(3, "Informe um valor menor que 3");

export const descriptionType = z.optional(z.string());
export const enumNoneAll = z.enum(["None", "Few", "Medium", "Many", "All"]);
