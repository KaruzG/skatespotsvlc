import Button from "../Button";
import "./AboutSection1.scss"
import phoneImg from "../../img/aboutPhone.png"
import TypingAnimation from "react-word-typing-animation"
import { BiChevronDown } from "react-icons/bi";
import { ErrorBoundary } from "react-error-boundary";



const AboutSection1 = () => {
  const WORDS = <TypingAnimation
    words={['SKATEPARKS', 'SPOTS', 'EVENTS', 'SHOPS']} 
    showComma={false} 
    showCursor={false}
    interval={1000}
    typingSpeed={250}
    />

    function handleWordsError(ev) {
      console.log("error")
      ev.target.innerText = "The BEST way to find SPOTS in Valencia! 🛹"
    }

  return (
    <>
      <section id="section1">
        <div id="phone" className="slide-top">
          <img src={phoneImg} alt="Preview of the app in a phone" />
          <div id="blurredCircle"></div>
        </div>
        <div>
          <ErrorBoundary fallback={<h1>The BEST way to find SPOTS in Valencia! 🛹</h1>}>
            <h1>The BEST way to find {WORDS} in Valencia! 🛹</h1>
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
