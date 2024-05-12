import axios from "axios"

const URL = import.meta.env.VITE_API_URL + "api/login"

const login = async credentials => {
    try {
        const { data } = await axios.post(URL, credentials)
        return data
    } catch (error) {
        console.log("Error")
    }

}

export default login