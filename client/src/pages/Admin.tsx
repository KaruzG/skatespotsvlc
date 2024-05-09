import Header from '../components/Header'
import AddSpotForm from '../components/AddSpotForm'
import AddUserForm from '../components/AddUserForm';
import '../css/admin.scss'
import { useState } from 'react';



function Admin() {

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