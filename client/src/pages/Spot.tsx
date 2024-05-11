import { useParams } from 'react-router-dom'
import BestSpotsSection from '../components/BestSpotsSection'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SpotPageMain from '../components/SpotPageMain'
import SpotsMap from '../components/SpotsMap'
import "../css/index.scss"


function Spot() {

    const { spotId } = useParams()

    //check if spot exists

    return (
            <div id='spot-wrapper'>
                <Header />
                <SpotPageMain spotId={spotId} />
                <SpotsMap />
                <BestSpotsSection />
                <Footer></Footer>
            </div>
    )
}

export default Spot