import { z } from "zod";
import { descriptionType, scoreType } from "./genericForm";

export const fieldsServerSchema = z.tuple([
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
      score: scoreType.optional().default(0),
    }),
  }),
]);

export const schemaServer = z.object({
  server: z.object({
    enabled: z.boolean(),
    servers: fieldsServerSchema,
    score: scoreType,
    description: descriptionType,
  }),
});

// export const DefaultValuesServer = {
//   servers: {
//     frequency: {
//       score: 0,
//       enabled: true,
//     },
//     policy: {
//       score: 0,
//       enabled: true,
//     },
//     restoration: {
//       score: 0,
//       enabled: true,
//     },
//     storage: {
//       local: { score: 0, enabled: true },
//       remote: { score: 0, enabled: true },
//     },
//   },
// };
