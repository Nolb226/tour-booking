import { TourByLocation } from './tour'

export type TLocation = {
   id: string
   name: string
   description: string
   avt: string
   latitude: number
   longitude: number
   total_tour: number
}

export type TLocationWithTours = {
   id: string
   name: string
   description: string
   avt: string
   latitude: number
   longitude: number
   tours: TourByLocation[]
}
