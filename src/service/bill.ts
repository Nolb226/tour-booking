import { ENDPOINTS } from '@/constants/endpoint'
import { get } from '@/lib/api'
import { Bill } from '@/model/bill'

export const getAllBill = () => {
   return get<{ result: Bill[] }>(ENDPOINTS.BILL.LIST)
}
