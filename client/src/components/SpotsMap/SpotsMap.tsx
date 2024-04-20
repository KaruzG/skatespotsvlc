import './SpotsMap.scss'
import 'leaflet/dist/leaflet.css'

import { latLng } from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

const position = latLng(39.46748, -0.3772)
const markers = [
  {
    coords: [39.46748, -0.3772],
    name: 'VALENCIA'
  }
]



const SpotsMap = () => {
  return (
    <>
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>' 
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />

      {markers.map(marker => (
                <Marker position={latLng(marker.coords[0], (marker.coords[1]))}>
                </Marker>
      ))}

    </MapContainer>
    </>
  )
};

export default SpotsMap;
