'use server'

import { PaymentRequest } from '@/model/booking'
import { createDraftBill, startPaying, updateBill } from '@/service/booking'
import { redirect } from 'next/navigation'

export const bookingTour = async (data: {
   tourId: string
   startTime: string
   numberOfAdults: number
   numberOfChildren: number
}) => {
   let billId
   try {
      const { result } = await createDraftBill(data)
      billId = result.bill_id
   } catch (error) {
      console.log(error)

      throw new Error('Failed to book')
   }
   redirect(`/booking/payment?reservationId=${billId}`)
}

export const startPayment = async (data: PaymentRequest) => {
   let confirmInformation
   try {
      const { result } = await updateBill(data)
      //   paymentUrl = result.paymentUrl
      confirmInformation = result.bill_id
      console.log(result)
   } catch (error) {
      console.log(error)
   }
   redirect(`/booking/payment/information?billId=${confirmInformation}`)
}

export const startVNPAY = async (billId: string) => {
   let paymentUrl
   try {
      const { result } = await startPaying(billId)
      paymentUrl = result.paymentUrl
   } catch (error) {
      console.log(error)
   }
   if (!paymentUrl) {
      throw new Error('500')
   }
   redirect(paymentUrl)
}
