import { z } from "zod";
import { descriptionType, scoreType } from "./genericForm";

export const schemaHA = z.object({
  ha: z.object({
    enabled: z.boolean(),
    solutions: z.enum(
      ["redundancy", "load balance", "failover", "cluster", "none"],
      {
        errorMap: () => {
          return {
            message:
              "Informe 'redundancy'|'load balance'|'failover'|'cluster'|'none'",
          };
        },
      }
    ),
    tested: z.boolean(),
    rto: z
      .number({
        invalid_type_error: "Insira um número válido",
      })
      .positive("Informe um valor maior que 0")
      .optional(),
    score: scoreType,
    description: descriptionType,
  }),
});
