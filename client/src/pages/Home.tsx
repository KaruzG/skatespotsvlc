import Header from '../components/Header'
import SpotBubble from '../components/SpotBubble'
import '../css/index.scss'



function Home() {
    return (
        <>
            <Header />
            <SpotBubble spotName='muvim' srcImg='muvim' />
        </>
    )
}

export default Home