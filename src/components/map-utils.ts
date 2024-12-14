import L from 'leaflet'

export const customIcon = (number: number, days_no?: number) => {
   const backgroundColor =
      days_no === 1 ? '#ff692e' : days_no === 2 ? '#66C61C' : '#FDB022'

   return L.divIcon({
      html: `<div style="background: ${backgroundColor}" class="map-marker-number-html-icon" ><span class="icon-number">${number}</span></div>`,
      className: 'map-marker-number-icon',
   })
}
