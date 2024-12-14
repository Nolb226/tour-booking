import { Traveler } from './booking'

export type Bill = {
   bill_id: string
   tour_title: string
   travelers: Traveler[]
   special_requirement: string
   promotion_code?: null
   other_requirement: string
   temp_price: number
   total_price: number
   pin_code: number
   tour_price: number
   avt: string
   status: string
   total_quantity: number
   start_time: string
   adult_quantity: number
   booked_at: string
   children_quantity: number
   total_days: number
   user: {
      email: string
      phone_number: string
      user_name: string
      dob: string
   }
}
