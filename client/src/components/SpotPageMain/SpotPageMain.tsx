import "./style.scss"

const SpotPageMain = ( {spotId} ) => {
  return (
    <>
      <main className="SpotPageMain">
        <div>
            <h1>{spotId}</h1>
            <h3>C: Street of the spot 40203</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam non cumque, quod fugit vel dolor culpa magni, totam voluptatum similique eius nobis maxime sequi ut doloribus nihil nostrum corrupti? Illo.</p>
        </div>
        <div>
            <img src="https://www.viewhotels.jp/ryogoku/wp-content/uploads/sites/9/2020/03/test-img.jpg" alt="" />
        </div>
      </main>
    </>
  )
};

export default SpotPageMain;
