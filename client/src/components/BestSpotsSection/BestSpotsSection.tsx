import SpotBubble from "../SpotBubble"
import Button from "../Button"
import "./BestSpotsSection.scss"
import { useContext, useEffect, useRef } from "react"
import { AllSpotsContext } from "../../context/AllSpotsContext"
import { getXmostVoted } from "../../utils/getXmostVoted"

const BestSpotsSection = () => {
    const SPOTS_TO_SHOW = 10
    const spots = useContext(AllSpotsContext)
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const scrollAmount = useRef<number>(0);

    // Best spots
    const spotsToShow = getXmostVoted(spots, SPOTS_TO_SHOW)

    // Scroll animation
    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return; // Salir si no hay contenedor
    
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    
        const scrollRight = () => {
          if (scrollAmount.current < maxScroll) {
            scrollAmount.current += 1;
            if (scrollContainer) {
              scrollContainer.scrollLeft = scrollAmount.current;
            }
          } else {
            clearInterval(scrollInterval); // Para el intervalo cuando llegue al final
          }
        };
    
        const scrollInterval = setInterval(scrollRight, 16); // Aproximadamente 60 fps
    
        // Limpiar el intervalo al desmontar el componente
        return () => clearInterval(scrollInterval);
      }, []);

    return (
        <>  
            <section className="bestSpotSection">
                <div className="bestSpotSection-shadow"></div>
                <h3>BEST SPOTS</h3>
                <div className="spots" ref={scrollContainerRef}>
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