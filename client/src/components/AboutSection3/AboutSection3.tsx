import Button from "../Button";
import "./AboutSection3.scss"
import { BiLogoGithub } from "react-icons/bi";


const AboutSection3 = () => {
  return (
   <section id="section3">
    <div id="wrapper">
      <div>
        <h2>Hey! 👋</h2>
        <h1>Im Miguel</h1>
      </div>

      <div>
        <p>Im a skater from Valencia who loves web development.</p>
        <p>This is just a end of course project I did.</p>
      </div>
      
      <div id="github">
        <Button innerText={"Check my GitHub!"} color="white" style="empty" size="l"/>
        <BiLogoGithub />
      </div>
    </div>

    <div id="blurredCircle"></div>
   </section>
  )
};

export default AboutSection3;
