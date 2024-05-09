import AboutSection1 from "../components/AboutSection1"
import AboutSection2 from "../components/AboutSection2"
import Header from "../components/Header"
import '../css/index.scss'
import '../css/about.scss'

function About() {
    return (
        <>
            <Header />
            <main>
                <AboutSection1/>
                <AboutSection2/>
            </main>
        </>
    )
}

export default About