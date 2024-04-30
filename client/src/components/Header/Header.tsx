import './header.scss'
import BurgerButton from '../BurgerButton'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Header() {
    const [isClicked , setIsClicked] = useState(false);
    const [dropdownDisplay , setDropdownDisplay] = useState("none");

    function handleClick() {
        if (isClicked) {
            setIsClicked(false)
            setDropdownDisplay("none")
        } else {
            setIsClicked(true);
            setDropdownDisplay("flex")
        }
    }

    return (
        <>
            <header>
                <Link to="/"><h1>SKATESPOTSVLC</h1></Link>
                <div onClick={handleClick}>
                    <BurgerButton />
                </div>
                <ul id='header-dropdown' style={{display: dropdownDisplay}}>
                    <li>USERNAME</li>
                    <hr />
                    <li> <Link to="/">HOME</Link> </li>
                    <li> <Link to="/">SPOTS</Link> </li>
                    <li> <Link to="/">ABOUT</Link> </li>
                </ul>
            </header>
        </>
    )
}

export default Header