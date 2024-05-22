import './header.scss'
import BurgerButton from '../BurgerButton'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { BiLogOut, BiBook, BiInfoCircle } from "react-icons/bi";
import { FaRegMap } from "react-icons/fa6";
import logout from '../../utils/logout';

function Header() {
    const [dropdownDisplay , setDropdownDisplay] = useState("none");
    
    const navigate = useNavigate()
    
    let username
    if (localStorage.getItem("token")) {
        username = localStorage.getItem("name")
    } else {
        username = "Not logged"
    }

    function handleClick() {
        if (dropdownDisplay === "none") {
            setDropdownDisplay("flex")
        } else {
            setDropdownDisplay("none")
        }
    }

    const UserBubble = () => {
        return (
        <>
            <li className='UserBubble'>
                <img title='User' src="https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" alt="profilePic" />
                <span>{username}</span>
                <BiLogOut onClick={handleLogout}/>
            </li>
        </>
        )
    } 


    function handleLogout() {
        if(logout()) { navigate("/") }
    }

    return (
        <>
            <header>
                <Link to="/"><h1 translate='no'>SKATESPOTSVLC</h1></Link>
                <div id='burgerButton' onClick={handleClick}>
                    <BurgerButton />
                </div>
                <nav id='navDesktop'>
                    <ul>
                        <Link to="/"><li><FaRegMap/></li></Link>
                        <Link to="/Spots"><li><BiBook/></li></Link>
                        <Link to="/About"><li><BiInfoCircle/></li></Link>
                    </ul>
                    <div onClick={handleClick}>
                        <UserBubble/>
                    </div>
                </nav>

                <ul id='header-dropdown'  style={{display: dropdownDisplay}}>
                    <UserBubble/>
                    <hr />
                    <Link to="/"><li><FaRegMap />HOME</li></Link>
                    <Link to="/spots"><li><BiBook />SPOTS</li></Link>
                    <Link to="/about"><li><BiInfoCircle />ABOUT</li></Link> 
                </ul>
            </header>
        </>
    )
}

export default Header