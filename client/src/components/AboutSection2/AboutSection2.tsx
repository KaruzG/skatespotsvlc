import Button from "../Button";
import "./AboutSection2.scss"
import SpotsParksShops from "../spotsParksShop"

const AboutSection2 = () => {
  return (
   <section id="section2">
    <h1>What are you looking for?</h1>
    <SpotsParksShops/>
    <Button color="orange" size="l" innerText="MAP" style="fill" />
   </section>
  )
};

export default AboutSection2;
