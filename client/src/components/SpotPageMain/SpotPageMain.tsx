import { useEffect, useState } from "react";
import Stars from 'react-awesome-stars-rating';
import "./style.scss"

const SpotPageMain = ( {spotId} ) => {
  const [spotData, setSpotData] = useState({
    "name": "Spot name",
    "desc": "Description of the spotDescription of the spotDescription of the spot lorem impsu Description of the spot Description of the spot a Description of the spot s Description of the spot",
    "coords": {"alt": 1, "lat": 2},
    "type": 1,
    "stars": 0,
    "police": 0,
    "images": ["default.jpg"],
    "comments": [],
  })
  
  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "api/spots/getSpots", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({spotId: Number(spotId)})
    })
    .then(res => res.json())
    .then(data => {
      setSpotData(data[0])
    })
  },[spotId])

  // Guarda el json en useMemo o useState
  // Alerta en el addSpot de que se ha añadido

  return (
    <>
      <main className="SpotPageMain">
        <div className="text-info">
            <div>
              <Stars value={spotData.stars} isEdit={false} starGap={2}/>
              <h1>{spotData.name}</h1>
            </div>
            <h3>{"Coords: " + spotData.coords.alt +", " +spotData.coords.lat}</h3>
            <p>{spotData.desc}</p>
            <span>Police risk: </span>
        </div>
        <div className="main-img">
            <img src={import.meta.env.VITE_S3 + spotData.images[0]} alt="" />
        </div>
      </main>
    </>
  )
};

export default SpotPageMain;
