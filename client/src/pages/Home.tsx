import BestSpotsSection from '../components/BestSpotsSection'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SpotsMap from '../components/SpotsMap'
import '../css/index.scss'
import SpotsParksShop from '../components/spotsParksShop'
import Button from '../components/Button'


function Home() {
    return (
        <div id='home-wrapper'>
            <Header />
                <SpotsMap />
                <BestSpotsSection />
            <section id='section-SpotsParksShop'>
              <h3>LOOKING FOR?</h3>
              <SpotsParksShop />
              <Button link={"/spots"} color="white" style="empty" size="l">MORE SPOTS</Button>
            </section>
            <Footer />
        </div>
    )
}

export default Home