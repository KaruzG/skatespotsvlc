import BestSpotsSection from '../components/BestSpotsSection'
import Header from '../components/Header'
import SpotsMap from '../components/SpotsMap'
import '../css/index.scss'



function Home() {
    return (
        <>
            <Header />
            <SpotsMap />
            <BestSpotsSection />
        </>
    )
}

export default Home