import "./SpotBubbleFeed.scss"
import { Link } from "react-router-dom";

type PropsSpotBubble = {
    spotName:string;
    srcImg:string;
    spotId: number;
}

function addDefaultImg(ev) {
  ev.target.src = "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"
}

const SpotBubbleFeed = (props:PropsSpotBubble) => {
  return (
    <>
      <Link to={"/spot/" + props.spotId}>
        <div className="spotBubbleFeed">
          <img onError={addDefaultImg} src={props.srcImg} alt={props.spotName} />
          <div>
            <h3>{props.spotName}</h3>
          </div>
        </div>
      </Link>
    </>
  )
};

export default SpotBubbleFeed;
