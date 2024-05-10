import './styles.scss'

/* imgs */
import skateshopImg from "../../img/skateshop.jpg"
import streetSpotImg from "../../img/streetSpot.jpg"
import skateparkImg from "../../img/skatepark.jpg"

const SpotsParksShop = () => {
    return (
      <div className="spotsParksShop">
        <div>
          <img src={streetSpotImg} alt="" />
          <h2>STREET</h2>
        </div>
  
        <div>
          <img src={skateparkImg} alt="" />
          <h2>PARKS</h2>
        </div>
  
        <div>
          <img src={skateshopImg} alt="" />
          <h2>SHOPS</h2>
        </div>
      </div>
    )
  };

export default SpotsParksShop