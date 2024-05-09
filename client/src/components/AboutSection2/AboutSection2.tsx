import Button from "../Button";
import "./AboutSection2.scss"
/* imgs */
import skateshopImg from "../../img/skateshop.jpg"
import streetSpotImg from "../../img/streetSpot.jpg"
import skateparkImg from "../../img/skatepark.jpg"

const AboutSection2 = () => {
  return (
   <section id="section2">
    <h1>What are you looking for?</h1>

    <div id="wrapper">
      <div>
        <img src={streetSpotImg} alt="" />
        <h2>STREET</h2>
      </div>

      <div>
        <img src={skateparkImg} alt="" />
        <h2>PARK</h2>
      </div>

      <div>
        <img src={skateshopImg} alt="" />
        <h2>SHOPS</h2>
      </div>
    </div>

    <Button color="orange" size="l" innerText="MAP" style="fill" />
   </section>
  )
};

export default AboutSection2;
