import { z } from "zod";

export const schemaRegister = z.object({
  name: z
    .string()
    .min(3, "O nome deve conter mais que 3 caracteres")
    .max(50, "O nome deve conter menos que 50 caracteres"),
  social_reason: z.string().optional(),
  email: z.string().email("E-mail inválido"),
  isAdmin: z.boolean(),
  _id: z.string().optional(),
  criticalProblems: z.boolean(),
  typeContract: z.enum(["Fixo", "Avulso"], {
    errorMap: () => {
      return { message: "Informe Fixo ou Avulso" };
    },
  }),
  urls: z.object({
    url_inventory: z.string().url("URL Inválida!"),
    url_runbook: z.string().url("URL Inválida!"),
    url_tickets: z.string().url("URL Inválida!"),
    url_kickoff: z.string().url("URL Inválida!"),
  }),
  cnpj: z.string(),
  contact: z.string(),
});
// .refine((data) => data.password === data.confirmPassword, {
//   message: "As senhas não são iguais",
//   path: ["confirmPassword"],
// });
