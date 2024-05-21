import Stars from 'react-awesome-stars-rating';
import PoliceRisk from "../PoliceRisk";
import "./style.scss"
import { SpotContext } from "../../context/SpotContext"
import { useContext } from 'react';
import { SpotData } from '../../types/spotData';

const SpotPageMain = () => {

  const spotData = useContext<SpotData>(SpotContext)

  return (
    <>
      <main className="SpotPageMain">
        <div className="text-info">
            <div>
              <Stars value={spotData.stars} isEdit={false} starGap={2}/>
              <h2>{spotData.name}</h2>
            </div>
            <h3>Coords: <span>{spotData.coords.alt +", " +spotData.coords.lat}</span></h3>
            <p>{spotData.desc}</p>
            <PoliceRisk risk={spotData.police} />
        </div>
        <div className="main-img">
            <img src={import.meta.env.VITE_S3 + spotData.images[0]} alt="" />
        </div>
      </main>
    </>
  )
};

export default SpotPageMain;
