import { ENDPOINTS } from '@/constants/endpoint'
import { get, getPublic, post, postPublic } from '@/lib/api'
import {
   DraftDetailResponse,
   MyBookingsResponse,
   PaymentRequest,
   PaymentResponse,
   ReservationResponse,
   UpdateBillResponse,
} from '@/model/booking'

export const createDraftBill = (data: {
   tourId: string
   startTime: string
   numberOfAdults: number
   numberOfChildren: number
}) => {
   return postPublic<ReservationResponse>(ENDPOINTS.BOOKING.CREATE_DRAFT, {
      body: {
         tour_id: data.tourId,
         start_time: data.startTime,
         adult_quantity: data.numberOfAdults,
         children_quantity: data.numberOfChildren,
      },
   })
}

export const updateBill = (data: PaymentRequest) => {
   return post<UpdateBillResponse>(ENDPOINTS.BOOKING.UPDATE_BILL, {
      body: data,
   })
}

export const getDraftDetail = (billId: string) => {
   return getPublic<DraftDetailResponse>(ENDPOINTS.BOOKING.DRAFT_DETAIL(billId))
}

export const getBillDetails = (billId: string) => {
   return getPublic<UpdateBillResponse>(ENDPOINTS.BOOKING.BILL_DETAILS(billId))
}

export const startPaying = (billId: string) => {
   return post<PaymentResponse>(ENDPOINTS.BOOKING.POST_PAYMENT, {
      body: {
         bill_id: billId,
      },
   })
}

export const getUserBookedTour = (status: string) => {
   return get<MyBookingsResponse>(ENDPOINTS.BOOKING.GET_USER_BOOKED_TOUR, {
      params: {
         status,
      },
   })
}
