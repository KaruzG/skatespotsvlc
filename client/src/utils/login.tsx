import axios from "axios"

const login = async credentials => {
    const URL = import.meta.env.VITE_API_URL + "api/login"

    try {
        const { data } = await axios.post(URL, credentials)
        const { name, type, token } = data
        localStorage.setItem("name", name)
        localStorage.setItem("type", type)
        localStorage.setItem("token", token)
        return true
    } catch (error) {
        return false
    }

}

export default login