import './SpotsMap.scss'
import 'leaflet/dist/leaflet.css'
import { latLng } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Button from '../Button'
import CUSTOM_ICONS from './Icons'

const POSITION = latLng(39.46748, -0.3772)
const S3_URL = "https://skatespotsvlc.s3.eu-west-3.amazonaws.com/spots/"
const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
const TILELAYER_URL = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"

// Must come from mongodb
const MARKERS = [
  {
    id: 1,
    coords: [39.46748, -0.3772],
    name: 'MUVIM',
    desc: 'The most iconic skate plaza in Valencia, always with some skaters arround.',
    type: 0,
    stars: 5,
    police: 2,
    comments: [
      {
        user_id: 0,
        comment: "The best place! #FreeMuvim"
      }
    ]
  },
  {
    id: 2,
    coords: [39.45748, -0.3672],
    name: 'PLAZA',
    type: 0,
    desc: 'Testttttt'

  },
  {
    id: 3,
    coords: [39.46748, -0.3672],
    name: 'VALENCIA2',
    type: 0,
    desc: 'Testttttt'

  }
]

const SpotsMap = () => {
  return (
    <MapContainer center={POSITION} zoom={13} scrollWheelZoom={false}>
      <TileLayer attribution= {ATTRIBUTION} url={TILELAYER_URL}/>
      {MARKERS.map((marker, index) => (
        <Marker key={index} position={latLng(marker.coords[0], marker.coords[1])} icon={CUSTOM_ICONS[marker.type]}>
          <Popup>
            <h3>{marker.name}</h3>
            <img src={S3_URL + marker.id + "/1"} alt="Spot Image"/>
            <p>{marker.desc}</p>
            <Button color='orange' size='s' style='fill' innerText='MORE INFO'></Button>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
};

export default SpotsMap;
