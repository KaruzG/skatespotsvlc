import SpotBubble from "../SpotBubble"
import Button from "../Button"
import "./BestSpotsSection.scss"

const BestSpotsSection = () => {
    return (
        <>  
            <section className="bestSpotSection">
                <div className="bestSpotSection-shadow"></div>
                <h3>BEST SPOTS</h3>
                <div className="spots">
                    <SpotBubble spotName='muvim' srcImg='muvim' />
                    <SpotBubble spotName='muvim' srcImg='muvim' />
                    <SpotBubble spotName='muvim' srcImg='muvim' />
                    <SpotBubble spotName='muvim' srcImg='muvim' />
                    <SpotBubble spotName='muvim' srcImg='muvim' />
                    <SpotBubble spotName='muvim' srcImg='muvim' />
                    <SpotBubble spotName='muvim' srcImg='muvim' />
                    <SpotBubble spotName='muvim' srcImg='muvim' />
                    <SpotBubble spotName='muvim' srcImg='muvim' />
                    <SpotBubble spotName='muvim' srcImg='muvim' />
                    <SpotBubble spotName='muvim' srcImg='muvim' />
                </div>
                <div className="bestSpotSection-shadow bestSpotSection-shadow-right"></div>
                <Button color="white" style="empty" size="l">MORE SPOTS</Button>
            </section>  
        </>
    )

}

export default BestSpotsSection