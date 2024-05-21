import Button from "../Button";
import "./AboutSection1.scss"
import phoneImg from "../../img/aboutPhone.png"
import { TypeAnimation } from 'react-type-animation'
import { BiChevronDown } from "react-icons/bi";
import { ErrorBoundary } from "react-error-boundary";



const AboutSection1 = () => {
  const WORDS = <TypeAnimation 
    sequence={['SPOTS', 2000, 'SKATEPARKS', 2000, 'SKATESHOPS', 2000, 'EVENTS', 2000]}
    repeat={Infinity}
    />

  return (
    <>
      <section id="section1">
        <div id="phone" className="slide-top">
          <img src={phoneImg} alt="Preview of the app in a phone" />
          <div id="blurredCircle"></div>
        </div>
        <div>
          <ErrorBoundary fallback={<h1>The BEST way to find SPOTS in Valencia! 🛹</h1>}>
            <h1>The BEST way to find</h1> <h1>{WORDS}</h1> <h1>in Valencia! 🛹</h1>
          </ErrorBoundary>
          <p>Find and share your favorite spots and useful info about them.</p>
          <Button color="orange" size="m" style="fill" link={"/"}>Try it now!</Button>
        </div>
        <BiChevronDown id="downArrow"/>
      </section>
    </>
  )
};

export default AboutSection1;
