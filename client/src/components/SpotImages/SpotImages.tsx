import { useContext } from 'react';
import { SpotContext } from '../../context/SpotContext';
import "./style.scss"

const SpotImages = () => {
    const IMAGES = useContext(SpotContext)
 
  return (
    <>
        <div id='SpotImages'>
            <h3>IMAGES</h3>
            <div id='SpotImages-imgs'>
                {IMAGES.images.map((img) => {
                    return(
                        <img src={import.meta.env.VITE_S3 + img} ></img>
                    )
                })}
            </div>
        </div>
    </>
  )
};

export default SpotImages;
