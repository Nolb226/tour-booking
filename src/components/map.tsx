import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

function Map() {
    return (
        <MapContainer
            className="h-full w-full"
            center={[10.8461814, 106.6554168]}
            zoom={13}
        >
            <TileLayer
                // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                url="https://map-resource.soctrip.com/tile/{z}/{x}/{y}.png"
            />
            <Marker position={[10.8461814, 106.6554168]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map
