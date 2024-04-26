import './Button.scss'

interface ButtonTypes {
    innerText: string,
    color: "orange" | "white",
    style: "fill" | "empty"
    size: "s" | "m" | "l",
}

const Button = ({innerText, color, style, size}: ButtonTypes) => {
    const colorClass = "Button-" + color
    const styleClass = "Button-" + style
    const sizeClass = "Button-" + size

    return (
    <>
      <button className={colorClass + " " + styleClass + " " + sizeClass}>{innerText}</button>
    </>
  )
};

export default Button;
