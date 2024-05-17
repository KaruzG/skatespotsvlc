import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SpotPageMain from '../components/SpotPageMain'
import "../css/index.scss"
import "../css/spot.scss"


function Spot() {

    const { spotId } = useParams()
    //check if spot exists

    return (
            <div id='spot-wrapper'>
                <Header />
                <SpotPageMain spotId={spotId} />
                <Footer></Footer>
            </div>
    )
}

export default Spot