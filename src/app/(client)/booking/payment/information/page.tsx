import ConfirmInformation from '@/components/pages/(client)/booking/payment/confirm-information'
import { getBillDetails } from '@/service/booking'

export default async function Page({
   searchParams,
}: {
   searchParams: { [key: string]: string | string | string[] }
}) {
   const data = await getBillDetails(searchParams.billId as string)
   return <ConfirmInformation data={data} />
}
