import AboutSection1 from "../components/AboutSection1"
import AboutSection2 from "../components/AboutSection2"
import Header from "../components/Header"
import '../css/index.scss'
import  '../css/about.scss'
import AboutSection3 from "../components/AboutSection3"



function About() {
    return (
        <div id="about-wrapper">
            <Header />
            <main>
                <AboutSection1/>
                <div id="backgroundCircle"></div>
                <AboutSection2/>
                <AboutSection3/>
            </main>
        </div>
    )
}

export default About