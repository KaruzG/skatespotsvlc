type PropsSpotBubble = {
    spotName:string;
    srcImg:string;
}

const SpotBubble = (props:PropsSpotBubble) => {
  return (
    <>
      <div>
        <img src={props.srcImg} alt={props.spotName} />
        <h3>{props.spotName}</h3>
      </div>
    </>
  )
};

export default SpotBubble;
