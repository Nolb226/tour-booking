import { useEffect } from 'react'
import { useMap } from 'react-leaflet'

export const MarkerGen: React.FC<any> = ({ markerList }) => {
   const map = useMap()

   const latlng1: [number, number] = markerList[0]
   const latlng2: [number, number] = markerList[1]

   const offsetX = latlng2[1] - latlng1[1],
      offsetY = latlng2[0] - latlng1[0]

   const r = Math.sqrt(Math.pow(offsetX, 2) + Math.pow(offsetY, 2)),
      theta = Math.atan2(offsetY, offsetX)

   const thetaOffset = 3.14 / 10

   const r2 = r / 2 / Math.cos(thetaOffset),
      theta2 = theta + thetaOffset

   const midpointX = r2 * Math.cos(theta2) + latlng1[1],
      midpointY = r2 * Math.sin(theta2) + latlng1[0]

   const midpointLatLng: [number, number] = [midpointY, midpointX]

   useEffect(() => {
      //@ts-ignore
      const pathFive = L.curve(['M', latlng1, 'Q', midpointLatLng, latlng2], {
         color: 'green',
         fill: false,
         dashArray: '5,10',
      })
      pathFive.addTo(map)
   }, [latlng1, latlng2, map, midpointLatLng])

   return null
}
