import './styles.scss'

/* imgs */
import skateshopImg from "../../img/skateshop.jpg"
import streetSpotImg from "../../img/streetSpot.jpg"
import skateparkImg from "../../img/skatepark.jpg"
import { Link } from 'react-router-dom'

const SpotsParksShop = () => {
    return (
      <div className="spotsParksShop">
          <div>
            <Link to={"/spots/1"}>
              <img src={streetSpotImg} alt="" />
              <h2>STREET</h2>
            </Link>
          </div>

          <div>
            <Link to={"/spots/2"}>
              <img src={skateparkImg} alt="" />
              <h2>PARKS</h2>
            </Link>
          </div>

          <div>
            <Link to={"/spots/3"}>
              <img src={skateshopImg} alt="" />
              <h2>SHOPS</h2>
            </Link>
          </div>
      </div>
    )
  };

export default SpotsParksShop