import BestSpotsSection from '../components/BestSpotsSection'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SpotsMap from '../components/SpotsMap'
import '../css/index.scss'
import { AllSpotsContext } from '../context/AllSpotsContext'
import { useEffect, useState } from 'react'
import { SpotData } from '../types/SpotData'


function Home() {
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
        <div id='home-wrapper'>
            <Header />
            <AllSpotsContext.Provider value={spots}>
                <SpotsMap />
                <BestSpotsSection />
            </AllSpotsContext.Provider>
            <Footer />
        </div>
    )
}

export default Home