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
    submit?: boolean,
}

const Button = ({color, style, size, onClick, link, children, onNewTab, submit = false}: ButtonTypes) => {
    const COLOR_CLASS = "Button-" + color
    const STYLE_CLASS = "Button-" + style
    const SIZE_CLASS = "Button-" + size
    let type: 'button' | 'submit' = 'button'

    if (submit) {type = 'submit'}

    let button = 
    <button type={type} onClick={onClick} className={COLOR_CLASS + " " + STYLE_CLASS + " " + SIZE_CLASS}>
      {children}
    </button>

    if (link && onNewTab) {
      button = <>
        <Link to={link} target='_blank'>
          {button}
        </Link>
      </>
    } else if (link) {
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
