import './Button.scss'

interface ButtonTypes {
    innerText: string,
    color: "orange" | "white",
    style: "fill" | "empty"
    size?: "s" | "m" | "l" | "auto",
}

const Button = ({innerText, color, style, size}: ButtonTypes) => {
    const COLOR_CLASS = "Button-" + color
    const STYLE_CLASS = "Button-" + style
    const SIZE_CLASS = "Button-" + size

    return (
    <>
      <button className={COLOR_CLASS + " " + STYLE_CLASS + " " + SIZE_CLASS}>{innerText}</button>
    </>
  )
};

export default Button;
