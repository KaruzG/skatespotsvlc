import Button from "../Button";
import "./AboutSection1.scss"
import phoneImg from "../../img/aboutPhone.png"
import TypingAnimation from "react-word-typing-animation"


const AboutSection1 = () => {
  const WORDS = <TypingAnimation 
    words={['SKATEPARKS', 'SPOTS', 'EVENTS', 'SHOPS']} 
    showComma={false} 
    showCursor={false}
    interval={1000}
    typingSpeed={250}
    />

  return (
    <>
      <section id="section1">
        <div id="phone">
          <img src={phoneImg} alt="Preview of the app in a phone" />
          <div id="blurredCircle"></div>
        </div>
        <div>
          <h1>The BEST way to find {WORDS} in Valencia! 🛹</h1>
          <p>Find and share your favorite spots and useful info about them.</p>
          <Button color="orange" size="m" style="fill" innerText="Try it now!"/>
        </div>
      </section>
    </>
  )
};

export default AboutSection1;
