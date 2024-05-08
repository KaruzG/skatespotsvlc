import BestSpotsSection from '../components/BestSpotsSection'
import Header from '../components/Header'
import SpotPageMain from '../components/SpotPageMain'
import SpotsMap from '../components/SpotsMap'
import "../css/index.scss"

function Spot() {
    return (
        <>
            <Header />
            <SpotPageMain/>
            <SpotsMap />
            <BestSpotsSection />
        </>
    )
}

export default Spot