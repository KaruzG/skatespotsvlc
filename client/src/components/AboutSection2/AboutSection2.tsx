import Button from "../Button";
import "./AboutSection2.scss"
import SpotsParksShops from "../spotsParksShop"
import { BiChevronDown } from "react-icons/bi";


const AboutSection2 = () => {
  return (
   <section id="section2">
    <h1>What are you looking for?</h1>
    
    <SpotsParksShops/>
    
    <Button color="orange" size="l" style="fill" link={"/"}>MAP</Button>
    
    <div id="about-proyect">
      <h4>About the proyect</h4>
      <BiChevronDown />
    </div>
   </section>
  )
};

export default AboutSection2;
