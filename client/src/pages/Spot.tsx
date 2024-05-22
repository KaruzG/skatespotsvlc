import { ScrollRestoration, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SpotPageMain from '../components/SpotPageMain'
import "../css/index.scss"
import "../css/spot.scss"
import { useEffect, useState } from 'react'
import {SpotContext} from  "../context/SpotContext"
import { SpotData } from '../types/SpotData'
import SpotImages from '../components/SpotImages'

const SAMPLE_SPOT_DATA = {
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

function Spot() {
    const { spotId } = useParams()
    const [spotData, setSpotData] = useState<SpotData>(SAMPLE_SPOT_DATA)

    
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

    return (
            <div id='spot-wrapper'>
                <Header />
                <SpotContext.Provider value={spotData}>
                   <SpotPageMain/>
                   <SpotImages/>    
                </SpotContext.Provider>
                <Footer></Footer>
                <ScrollRestoration/>
            </div>
    )
}

export default Spot