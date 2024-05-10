import { Link } from 'react-router-dom';
import './Button.scss'
interface ButtonTypes {
    color: "orange" | "white",
    style: "fill" | "empty"
    size?: "s" | "m" | "l" | "auto",
    onClick?: React.MouseEventHandler,
    link?,
    children?,
    onNewTab?: boolean,
}

const Button = ({color, style, size, onClick, link, children, onNewTab}: ButtonTypes) => {
    const COLOR_CLASS = "Button-" + color
    const STYLE_CLASS = "Button-" + style
    const SIZE_CLASS = "Button-" + size

    let button = 
    <button onClick={onClick} className={COLOR_CLASS + " " + STYLE_CLASS + " " + SIZE_CLASS}>
      {children}
    </button>

    if (link && onNewTab) {
      button = <>
        <Link to={link} target='_blank'>
          {button}
        </Link>
      </>
    } else {
      button = <>
        <Link to={link}>
          {button}
        </Link>
      </>
    }

    return ( 
      <>
        {button}
      </>
     )
};

export default Button;
