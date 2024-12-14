import { ENDPOINTS } from '@/constants/endpoint'
import { get, postPublic } from '@/lib/api'

type LoginSuccess = {
   result: {
      authenticated: boolean
      token: string
   }
}

export const postLogin = async (email: string, password: string) => {
   const data = await postPublic<LoginSuccess | string>(ENDPOINTS.AUTH.LOGIN, {
      body: {
         email,
         password,
      },
   })
   return data as LoginSuccess
}

export const getCurrentUser = () => {
   return get(ENDPOINTS.AUTH.CURRENT_USER)
}
