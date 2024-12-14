import TourDetails from '@/components/pages/(client)/tour/tour-details'
import { getTourDetails } from '@/service/tour'

export default async function Page({ params }: { params: { slug: string } }) {
   const tour = await getTourDetails(params.slug)

   return <TourDetails tour={tour} />
}
