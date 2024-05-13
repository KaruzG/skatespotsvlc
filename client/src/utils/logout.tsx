const logout = () => {
        if(!localStorage.getItem("token")) { return false }

        console.log("Loggin out")
        localStorage.clear()
        return true
}

export default logout