'use server'

import { postBookmarkTour } from '@/service/tour'
import { revalidatePath } from 'next/cache'

export const bookmarkTourAction = (tourId: string) => {
   postBookmarkTour(tourId)
   revalidatePath('/saved-tour', 'page')
}
