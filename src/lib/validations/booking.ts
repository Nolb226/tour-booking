import { z } from 'zod'

export const BookingFormSchema = z.object({
   bill_id: z.string(),
   tour_id: z.string(),
   user_name: z.string().min(1, { message: 'Họ và tên không được để trống' }),
   email: z.string().email({ message: 'Email không hợp lệ' }),
   phone_number: z.string().min(10, { message: 'Số điện thoại không hợp lệ' }),
   travelers: z.array(
      z.object({
         name: z.string().min(1, { message: 'Họ và tên không được để trống' }),
         email: z.string().email({ message: 'Email không hợp lệ' }),
         phone_number: z
            .string()
            .min(10, { message: 'Số điện thoại không hợp lệ' }),
         type: z.enum(['ADULT', 'CHILD']),
      })
   ),
   special_requirement: z.string(),
   other_requirement: z.string(),
})
