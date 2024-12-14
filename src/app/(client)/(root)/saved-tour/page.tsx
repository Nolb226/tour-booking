import { getSavedTour } from '@/service/tour'
import SavedTourPage from '@/components/pages/(client)/saved-list/saved-tour-page'

export default async function Page() {
   const savedTours = await getSavedTour()

   return <SavedTourPage savedTours={savedTours} />
}
