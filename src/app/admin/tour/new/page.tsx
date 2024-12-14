import NewTour from '@/components/pages/(client)/tour/new-tour'
import { getPlaces } from '@/service/location'

export default async function Page() {
   const places = await getPlaces()
   return <NewTour places={places} />
}
