import Button from "../Button";
import "./AboutSection2.scss"
import SpotsParksShops from "../spotsParksShop"
import { BiChevronDown } from "react-icons/bi";


const AboutSection2 = () => {
  return (
   <section id="section2">
    <h1>What are you looking for?</h1>

    <SpotsParksShops/>
    
    <div className="section2-button">
      <Button color="orange" size="l" style="fill" link={"/spots/0"}>MAP</Button>
    </div>
    
    <div id="about-proyect">
      <h4>About the proyect</h4>
      <BiChevronDown />
    </div>
   </section>
  )
};

export default AboutSection2;
