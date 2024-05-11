import BestSpotsSection from '../components/BestSpotsSection'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SpotPageMain from '../components/SpotPageMain'
import SpotsMap from '../components/SpotsMap'
import "../css/index.scss"

function Spot() {
    return (
        <div id='spot-wrapper'>
            <Header />
            <SpotPageMain/>
            <SpotsMap />
            <BestSpotsSection />
            <Footer></Footer>
        </div>
    )
}

export default Spot