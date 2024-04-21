import './SpotsMap.scss'
import 'leaflet/dist/leaflet.css'
import { Icon, latLng } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const position = latLng(39.46748, -0.3772)

// Must come from backend
const markers = [
  {
    id: 1,
    coords: [39.46748, -0.3772],
    name: 'MUVIM',
    desc: 'The most iconic skate plaza in Valencia, always with some skaters arround.'
  },
  {
    id: 2,
    coords: [39.45748, -0.3672],
    name: 'VALENCIA2'
  }
]

// Icon for the map marker
const customIcon = new Icon({
  iconUrl: "https://godirectplumbing.com/wp-content/uploads/2024/03/GPS-Icon.png",
  iconSize: [45, 45]
})



const SpotsMap = () => {
  return (
    <>
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>' 
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />

      {markers.map((marker, index) => (
                <Marker key={index} position={latLng(marker.coords[0], marker.coords[1])} icon={customIcon}>
                  <Popup>
                    <h3>{marker.name}</h3>
                    <img src={"/src/img/spots/" + marker.id + "/1.jpg"} alt=""/>
                    <p>{marker.desc}</p>
                    <button>MORE INFO</button>
                  </Popup>
                </Marker>
      ))}

    </MapContainer>
    </>
  )
};

export default SpotsMap;
