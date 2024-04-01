import SpotBubble from "../SpotBubble"
import "./BestSpotsSection.scss"

const BestSpotsSection = () => {
    return (
        <>  
            <section className="bestSpotSection">
                <div className="bestSpotSection-shadow"></div>
                <SpotBubble spotName='muvim' srcImg='muvim' />
                <SpotBubble spotName='muvim' srcImg='muvim' />
                <SpotBubble spotName='muvim' srcImg='muvim' />
                <SpotBubble spotName='muvim' srcImg='muvim' />
                <SpotBubble spotName='muvim' srcImg='muvim' />
                <SpotBubble spotName='muvim' srcImg='muvim' />
                <SpotBubble spotName='muvim' srcImg='muvim' />
                <SpotBubble spotName='muvim' srcImg='muvim' />
                <div className="bestSpotSection-shadow"></div>
            </section>  

        </>
    )

}

export default BestSpotsSection