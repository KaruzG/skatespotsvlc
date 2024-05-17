import axios from "axios"

const validFormats = ["image/jpg", "image/jpeg", 'image/png', 'image/webp']

const uploadSpotImg = async (spotId, _id, image) => {
    const URL = import.meta.env.VITE_API_URL + "api/spots/image"
    if (!validFormats.find(type => type === image.type)) {
      console.log("error")
      return {error: "Wrong file format"}
    }

    const formData = new FormData()
    formData.append("file", image)
    formData.append("spotId", spotId)
    formData.append("_id", _id)

    const OPTIONS = {
      headers: {
        'Authorization': "Bearer " + localStorage.getItem("token")
      }
    }

    return await axios.post(URL, formData, OPTIONS)
}

  export default uploadSpotImg