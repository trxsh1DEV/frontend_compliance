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
    rto: scoreType.optional(),
    score: scoreType.optional(),
    description: descriptionType,
  }),
});
