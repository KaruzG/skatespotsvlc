import BestSpotsSection from '../components/BestSpotsSection'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SpotsMap from '../components/SpotsMap'
import '../css/index.scss'
import SpotsParksShop from '../components/spotsParksShop'
import Button from '../components/Button'
import { ScrollRestoration } from 'react-router-dom'


function Home() {
    return (
        <div id='home-wrapper'>
            <Header />
                <SpotsMap />
                <BestSpotsSection />
            <section id='section-SpotsParksShop'>
              <h3>LOOKING FOR?</h3>
              <SpotsParksShop />
              <Button link={"/spots/0"} color="white" style="empty" size="l">MORE SPOTS</Button>
            </section>
            <Footer />
            <ScrollRestoration/>
        </div>
    )
}

export default Home