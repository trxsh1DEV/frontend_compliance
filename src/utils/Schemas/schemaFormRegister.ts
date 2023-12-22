import { z } from "zod";

export const schemaRegister = z
  .object({
    name: z
      .string()
      .min(3, "O nome deve conter mais que 3 caracteres")
      .max(50, "O nome deve conter menos que 50 caracteres"),
    social_reason: z.string().optional(),
    email: z.string().email("E-mail inválido"),
    password: z
      .string()
      .min(8, "A senha deve conter mais de 8 caracteres")
      .max(30, "A senha deve conter menos de 30 caracteres"),
    confirmPassword: z
      .string()
      .min(8, "A senha deve conter mais de 8 caracteres")
      .max(30, "A senha deve conter menos de 30 caracteres"),
    isAdmin: z.boolean(),
    createdAt: z.string().optional(),
    _id: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não são iguais",
    path: ["confirmPassword"],
  });
