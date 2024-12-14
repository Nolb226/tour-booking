import MyBookings from '@/components/pages/(client)/my-bookings/my-bookings'
import { getUserBookedTour } from '@/service/booking'

export default async function Page() {
   const bookings = await getUserBookedTour('all')

   return <MyBookings data={bookings.result.content} />
}
