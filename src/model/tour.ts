export type Tour = {
   id: string
   title: string
   slug: string
   avt: string
   price: number
   location?: {
      id: string
      name: string
      latitude: number
      longitude: number
   }
   total_days: number
   bookable_start_date: string
   bookable_end_date: string
   policy: string
   highlight: string
   min_booking_traveler: number
}

export type BookmarkedTour = {
   id: string
   title: string
   price: number
   locationName: string
   createdAt: string
   slug: string
   avt: string
}

export type Gallery = string[]

export type Schedule = {
   start_day: string
   end_day: string
   max_slot: number
   slot_booked: number
   is_refundable: boolean
}

export type Itinerary = {
   title: string
   day_no: number
   placeVisits: PlaceVisit[]
}

export type Place = {
   id: string
   latitude: number
   longitude: number
   address: string
   name: string
}

export type PlaceVisit = {
   order_number: number
   start_time: string
   end_time: string
   description: string
   place: Place
}

export type TourDetail = Tour & {
   schedules: Schedule[]
   itineraries: Itinerary[]
   galleries: Gallery
}

export type TourByLocation = {
   id: string
   title: string
   slug: string
   avt: string
   locationName: string
   price: number
}
