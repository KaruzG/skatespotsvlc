import './style.scss';
import { Link } from 'react-router-dom';
import { BiLogoInstagram, BiLogoGithub, BiMailSend   } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <footer id='footerComponent'>
        <div id='shadow'>

        </div>
        <div id='info'>
          <div>
              <h3>Social</h3>
              <ul>
                  <li>
                      <Link to={'https://github.com/KaruzG'} target='_blank'>
                        <BiLogoGithub/>
                          <span>GitHub</span>
                      </Link>
                  </li>
                  <li>
                      <Link to={'https://www.instagram.com/skatevlc/'} target='_blank'>
                          <BiLogoInstagram/>
                          <span>Instagram</span>
                      </Link>
                  </li>
              </ul>
          </div>

          <div>
              <h3>Contact Us</h3>
              <ul>
                  <li>
                        <BiMailSend/>
                          <span>skatespotsvlc@outlook.es</span>
                  </li>
              </ul>
          </div>
        </div>
      </footer>
    </>
  )
};

export default Footer;