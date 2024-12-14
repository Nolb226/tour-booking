import { z } from 'zod'
export const LoginFormSchema = z.object({
   email: z
      .string()
      .trim()
      .min(1, { message: 'Email cannot be empty' })
      .email({ message: 'Invalid email' }),
   password: z.string().trim().min(1, { message: 'Password cannot be empty' }),
})
