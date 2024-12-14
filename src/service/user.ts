import { ENDPOINTS } from '@/constants/endpoint'
import { get } from '@/lib/api'

export const getAllUser = () => get<any>(ENDPOINTS.USER.LIST)
