import { ENDPOINTS } from '@/constants/endpoint'
import { get, getPublic, post } from '@/lib/api'
import { BookmarkedTour, Tour, TourDetail } from '@/model/tour'

export const getTourDetails = (slug: string) => {
   return getPublic<TourDetail>(ENDPOINTS.TOUR.GET_TOUR_DETAILS(slug))
}

export const getSavedTour = () => {
   return get<BookmarkedTour[]>(ENDPOINTS.TOUR.BOOKMARKED)
}

export const searchForTour = (
   query: string,
   minPrice?: string,
   maxPrice?: string
) => {
   return getPublic<Tour[]>(ENDPOINTS.TOUR.SEARCH, {
      params: {
         locationOrSlug: query,
         ...(minPrice && { minPrice }),
         ...(maxPrice && { maxPrice }),
      },
   })
}

export const getOutstandingTour = () => {
   return getPublic<Tour[]>(ENDPOINTS.TOUR.GET_OUTSTANDING_TOURS)
}

export const postBookmarkTour = (tourId: string) => {
   return post<string>(ENDPOINTS.TOUR.BOOKMARK_TOUR(tourId))
}

export const getAdminTour = () => {
   return get<BookmarkedTour[]>(ENDPOINTS.TOUR.GET_ADMIN_TOURS)
}
