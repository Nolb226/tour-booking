import FillingPayment from '@/components/pages/(client)/booking/payment/filling-payment'
import { getDraftDetail } from '@/service/booking'

export default async function Page({
   searchParams,
}: {
   searchParams: { [key: string]: string | string | string[] }
}) {
   const data = await getDraftDetail(searchParams.reservationId as string)

   return (
      <FillingPayment
         data={data}
         bill_id={searchParams.reservationId as string}
      />
   )
}
