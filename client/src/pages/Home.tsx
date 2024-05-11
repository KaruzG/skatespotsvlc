import BestSpotsSection from '../components/BestSpotsSection'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SpotsMap from '../components/SpotsMap'
import '../css/index.scss'



function Home() {
    return (
        <div id='home-wrapper'>
            <Header />
            <SpotsMap />
            <BestSpotsSection />
            <Footer />
        </div>
    )
}

export default Home