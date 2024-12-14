import TourListing from '@/components/pages/admin/tour/tour-listing'
import { getAdminTour } from '@/service/tour'

export default async function Page() {
   const tours = await getAdminTour()

   return <TourListing tours={tours} />
}
