import './SpotsMap.scss'
import 'leaflet/dist/leaflet.css'
import { latLng } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Button from '../Button'
import CUSTOM_ICONS from './Icons'
import { useEffect, useState } from 'react';

const POSITION = latLng(39.46748, -0.3772)
const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
const TILELAYER_URL = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"

const SpotsMap = () => {
  const [spots, setSpots] = useState([  {
    id: 1,
    spotId: 1,
    coords: {alt: 39.46748, lat: -0.3772},
    name: 'MUVIM',
    desc: 'The most iconic skate plaza in Valencia, always with some skaters arround.',
    type: 0,
    stars: 5,
    police: 2,
    images: ["default.jpg"],
    comments: [
      {
        user_id: 0,
        comment: "The best place! #FreeMuvim"
      }
    ]
  }])


  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "api/spots/getSpots", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }})
    .then(res => res.json())
    .then(data => {
      setSpots(data)
    })
  },[])

  return (
    <MapContainer center={POSITION} zoom={13} scrollWheelZoom={false}>
      <TileLayer attribution= {ATTRIBUTION} url={TILELAYER_URL}/>
      {spots.map((marker, index) => (
        <Marker key={index} position={latLng(marker.coords.lat, marker.coords.alt)} icon={CUSTOM_ICONS[marker.type]}>
          <Popup>
            <h3>{marker.name}</h3>
            <img src={import.meta.env.VITE_S3 + marker.images[0]} alt="Spot Image"/>
            <p>{marker.desc}</p>
            <Button link={"spot/" + marker.spotId} color='orange' size='l' style='fill'>MORE INFO</Button>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
};

export default SpotsMap;
