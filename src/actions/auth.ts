'use server'
import { LoginFormSchema } from '@/lib/validations/auth'
import { postLogin } from '@/service/common'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export type LoginFormState =
   | {
        error?: {
           email?: string[]
           password?: string[]
        }
        message?: string
     }
   | undefined

export const login = async (state: LoginFormState, formData: FormData) => {
   const validateFields = LoginFormSchema.safeParse({
      email: formData.get('email') as string,
      password: formData.get('password') as string,
   })
   if (!validateFields.success) {
      console.log(validateFields.error.flatten().fieldErrors)

      return {
         error: validateFields.error.flatten().fieldErrors,
      }
   }
   const { result } = await postLogin(
      validateFields.data.email,
      validateFields.data.password
   )
   const session = cookies().set('_session', result.token, {
      httpOnly: true,
      secure: true,
      path: '/',
   })
   console.log(result)

   redirect('/')
}
