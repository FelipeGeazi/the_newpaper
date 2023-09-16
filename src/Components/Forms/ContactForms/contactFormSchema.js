import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().nonempty("O nome é obrigatório"),
  email: z.string().nonempty("O email é obrigatório"),
  departament: z.string().nonempty("O departamento é Obrigatório"),
  message: z.string().optional(),
});
