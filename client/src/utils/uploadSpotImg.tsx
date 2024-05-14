import axios from "axios"

const uploadSpotImg = async (spotId, image) => {
    const URL = import.meta.env.VITE_API_URL + "api/spots/image/"
    const formData = new FormData()
    formData.append("file", image)
    formData.append("spotId", spotId)

    const OPTIONS = {
      headers: {
        'Authorization': "Bearer " + localStorage.getItem("token")
      }
    }

    return await axios.post(URL, formData, OPTIONS)
}

  export default uploadSpotImg