import { createContext, useEffect, useState } from "react";
import { SpotData } from "../types/SpotData";

export const AllSpotsContext = createContext<SpotData[]>([
    {
        "spotId": 1,
        "name": "Loading data",
        "desc": "",
        "coords": {"alt": 1, "lat": 2},
        "type": 1,
        "stars": 0,
        "police": 0,
        "images": ["default.jpg"],
        "comments": [],
      }
])

export const SpotsProvider = ({ children }) => {
  const [spots, setSpots] = useState<SpotData[]>([{
    spotId: 1,
    coords: {alt: 39.46748, lat: -0.3772},
    name: 'MUVIM',
    desc: 'The most iconic skate plaza in Valencia, always with some skaters arround.',
    type: 0,
    stars: 5,
    police: 2,
    images: ["default.jpg"],
    comments: []
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
    <AllSpotsContext.Provider value={spots}>
      {children}
    </AllSpotsContext.Provider>
  );
};
