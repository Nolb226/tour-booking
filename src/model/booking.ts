export type ReservationResponse = {
   result: {
      bill_id: string
      tour_id: string
      start_time: string
   }
}

export type DraftDetailResponse = {
   result: {
      tour_id: string
      tour_title: string
      avt: string
      location: string
      total_quantity: number
      start_time: string
      price: number
      total_days: number
      adult_quantity: number
      children_quantity: number
      tour_price: number
   }
}

export type Traveler =
   | {
        name: string
        email: string
        phone_number: string
        type: 'ADULT'
     }
   | {
        name: string
        type: 'CHILD'
     }

export type PaymentRequest = {
   bill_id: string
   tour_id: string
   user_name: string
   email: string
   phone_number: string
   travelers: Traveler[]
   special_requirement: string
   promotion_code?: null
   other_requirement: string
}

export type UpdateBillResponse = {
   result: {
      bill_id: string
      tour_title: string
      tour_id: string
      user_name: string
      start_time: string
      adult_quantity: number
      children_quantity: number
      avt: string
      total_quantity: number
      email: string
      phone_number: string
      travelers: Traveler[]
      special_requirement: string
      promotion_code?: null
      other_requirement: string
      pin_code: number
      temp_price: number
      total_price: number
      total_days: number
   }
}

export type PaymentResponse = {
   message: string
   result: {
      code: string
      message: string
      paymentUrl: string
   }
}

export type MyBookingsResponse = {
   message: string
   result: {
      content: MyBooking[]
      pageable: {
         pageNumber: number
         pageSize: number
      }
      last: boolean
      totalPages: number
      totalElements: number
      size: number
      number: number
      sort: {
         sorted: boolean
         unsorted: boolean
         empty: boolean
      }
      first: boolean
      numberOfElements: number
      empty: boolean
   }
}

export type MyBooking = {
   bill_id: string
   bill_status: string
   avt: string
   tour_title: string
   start_days: string
   end_days: string
   total_adult: number
   total_children: number
   total_price: number
}
