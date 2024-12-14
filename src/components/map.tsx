import React from 'react'
import {
   MapContainer,
   MapContainerProps,
   Marker,
   Popup,
   TileLayer,
} from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

function Map({ children, center, ...props }: MapContainerProps) {
   return (
      <MapContainer
         className="h-full w-full"
         center={center || [10.8461814, 106.6554168]}
         zoom={13}
         {...props}
      >
         <TileLayer
            // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            url="https://map-resource.soctrip.com/tile/{z}/{x}/{y}.png"
            className="h-full w-full"
         />
         {children}
      </MapContainer>
   )
}

export default Map
