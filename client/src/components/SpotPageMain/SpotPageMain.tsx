import Stars from 'react-awesome-stars-rating';
import PoliceRisk from "../PoliceRisk";
import "./style.scss"
import { SpotContext } from "../../context/SpotContext"
import { useContext } from 'react';
import { SpotData } from '../../types/SpotData';

const SpotPageMain = () => {

  const spotValues = useContext<SpotData>(SpotContext)

  return (
    <>
      <main className="SpotPageMain">
        <div className="text-info">
            <div>
              <Stars value={spotValues.stars} isEdit={false} starGap={2}/>
              <h2>{spotValues.name}</h2>
            </div>
            <h3>Coords: <span>{spotValues.coords.alt +", " +spotValues.coords.lat}</span></h3>
            <p>{spotValues.desc}</p>
            <PoliceRisk risk={spotValues.police} />
        </div>
        <div className="main-img">
            <img src={import.meta.env.VITE_S3 + spotValues.images[0]} alt="" />
        </div>
      </main>
    </>
  )
};

export default SpotPageMain;
