import { ENDPOINTS } from '@/constants/endpoint'
import { getPublic, get } from '@/lib/api'
import { TLocation, TLocationWithTours } from '@/model/location'
import { Place, TourByLocation } from '@/model/tour'

export const getLocations = () => {
   return getPublic<TLocation[]>(ENDPOINTS.LOCATION.GET_LOCATIONS)
}

export const getLocationTours = (search: string) => {
   return getPublic<TLocationWithTours>(ENDPOINTS.LOCATION.GET_TOURS(search))
}

export const getPlaces = () => {
   return get<Place[]>(ENDPOINTS.LOCATION.GET_PLACES)
}
