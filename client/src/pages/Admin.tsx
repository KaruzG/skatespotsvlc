/* eslint-disable react-hooks/rules-of-hooks */
import Header from '../components/Header'
import AddSpotForm from '../components/AddSpotForm'
import AddUserForm from '../components/AddUserForm';
import '../css/admin.scss'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';



function Admin() {
    // Logged user check
    const TOKEN = localStorage.getItem("token")
    if (!TOKEN) return <Navigate to="/login"/> 


    // UI
    const navButtonSpots = <button onClick={handleClickSpots}>SPOTS</button>
    const navButtonUser = <button onClick={handleClickUsers}>USERS</button>
    const [shownForm, setShownForm] = useState(<AddSpotForm/>)

    function handleClickSpots() {
        setShownForm(<AddSpotForm/>)
    }  

    function handleClickUsers() {
        setShownForm(<AddUserForm/>)
    }



    return (
        <div id='admin-wrapper'>
            <Header />
            <main>
                <nav className={"admin-nav"}>
                    {navButtonSpots}
                    {navButtonUser}
                </nav>

                {shownForm}
            </main>
        </div>
    )
}

export default Admin