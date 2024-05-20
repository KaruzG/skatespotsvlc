import SpotBubble from "../SpotBubble"
import Button from "../Button"
import "./BestSpotsSection.scss"
import { useContext } from "react"
import { AllSpotsContext } from "../../context/AllSpotsContext"

const BestSpotsSection = () => {
    const SPOTS_TO_SHOW = 10

    const spots = useContext(AllSpotsContext)

    const getXmostVoted = (spots, spotsReturned: number) => {
        const sortedArray = spots.sort((a, b) => b.stars - a.stars)
        return sortedArray.slice(0, spotsReturned)
    }

    const spotsToShow = getXmostVoted(spots, SPOTS_TO_SHOW)

    return (
        <>  
            <section className="bestSpotSection">
                <div className="bestSpotSection-shadow"></div>
                <h3>BEST SPOTS</h3>
                <div className="spots">
                    {spotsToShow.map((spot) => {
                        return <SpotBubble spotName={spot.name} srcImg={import.meta.env.VITE_S3 + spot.images[0]} spotId={spot.spotId} />
                    })}
                </div>
                <div className="bestSpotSection-shadow bestSpotSection-shadow-right"></div>
                <Button color="white" style="empty" size="l">MORE SPOTS</Button>
            </section>  
        </>
    )

}

export default BestSpotsSection