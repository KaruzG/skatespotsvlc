import "./SpotBubble.scss"

type PropsSpotBubble = {
    spotName:string;
    srcImg:string;
}

function addDefaultImg(ev) {
  ev.target.src = "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"
}

const SpotBubble = (props:PropsSpotBubble) => {
  return (
    <>
      <div className="spotBubble">
        <img onError={addDefaultImg} src={props.srcImg} alt={props.spotName} />
        <h3>{props.spotName}</h3>
      </div>
    </>
  )
};

export default SpotBubble;
