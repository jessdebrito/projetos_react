import { z } from "zod";
export const formSchema = z
  .object({
    name: z.string().min(3, "O número mínimo de caracteres é 3."),
    lastname: z.string().min(3, "O número mínimo de caracteres é 3."),
    gender: z.string().refine((field) => field !== "select", {
      message: "Você precisa escolher uma opção.",
    }),
    email: z
      .string()
      .min(3, "O campo é obrigatório")
      .email("Utilize um e-mail válido."),
    password: z.string().min(8, "A senha precisa ter no mínimo 8 caracteres."),
    confirmpassword: z
      .string()
      .min(8, "A senha precisa ter no mínimo 8 caracteres."),
    agree: z.boolean().refine((field) => field === true, {
      message: "Você precisa concordar com os termos de uso.",
    }),
  })
  .refine((field) => field.password === field.confirmpassword, {
    message: "As senhas precisam ser iguais.",
    path: ['confirmpassword'],
  });
export type FormSchema = z.infer<typeof formSchema>;