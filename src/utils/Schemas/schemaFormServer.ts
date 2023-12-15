import { z } from "zod";
import { descriptionType, scoreType } from "./genericForm";

export const fieldsServerSchema = z.array(
  z.object({
    serverName: z.string().min(3, "O nome deve ser maior que 3"),
    systemOperation: z.object({
      patching: z.enum(["Regular", "Irregular"], {
        errorMap: () => {
          return { message: "Informe 'Regular' ou 'Irregular'" };
        },
      }),
      score: scoreType,
    }),
    config: z.object({
      level: z.enum(["low", "medium", "high"], {
        errorMap: () => {
          return { message: "Informe 'low'|'medium'|'high'" };
        },
      }),
      score: scoreType,
    }),
    monitoringPerfomance: z.object({
      enabled: z.boolean(),
      score: scoreType,
    }),
    score: scoreType,
    description: descriptionType,
  })
);

export const schemaServer = z.object({
  server: z.object({
    enabled: z.boolean(),
    servers: fieldsServerSchema,
  }),
});
