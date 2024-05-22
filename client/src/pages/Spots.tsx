import { useContext, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../css/spots.scss"
import { AllSpotsContext } from "../context/AllSpotsContext";
import SpotBubbleFeed from "../components/SpotBubbleFeed";

export function Spots() {
  const spots = useContext(AllSpotsContext)
  const [activeMenu, setActiveMenu] = useState(0)
  /* const [shownSpots, setShownSpots] = useState(0) */

  const navMenus = [
    <button key={0} className={activeMenu === 0 ? 'active' : ''} onClick={() => setActiveMenu(0)}>ALL</button>,
    <button key={1} className={activeMenu === 1 ? 'active' : ''} onClick={() => setActiveMenu(1)}>STREET</button>,
    <button key={2} className={activeMenu === 2 ? 'active' : ''} onClick={() => setActiveMenu(2)}>PARK</button>,
    <button key={3} className={activeMenu === 3 ? 'active' : ''} onClick={() => setActiveMenu(3)}>SHOPS</button>,
  ]

  function filterSpots(menu) {
    switch (menu) {
      case 0:
        return spots
      case 1:
        return spots.filter(spot => spot.type === 0)
      case 2:
        return spots.filter(spot => spot.type === 1)
      case 3:
        return spots.filter(spot => spot.type === 2)
      default:
        return spots
    }
  }

  const spotsToShow = filterSpots(activeMenu)

    return (
      <>
            <Header />
            <div id='spots-wrapper'>
                <nav>
                  {navMenus.map((menu) => {
                    return (menu)
                  })}
                </nav>
                <main>
                  {
                    spotsToShow.map((spot) => {
                      return (<SpotBubbleFeed key={spot.spotId} spotId={spot.spotId} spotName={spot.name} srcImg={import.meta.env.VITE_S3 + spot.images[0]}/>)
                    })
                  }
                </main>
            </div>
            <Footer />
      </>
    )
}