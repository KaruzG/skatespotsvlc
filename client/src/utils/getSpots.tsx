import axios from "axios"

/* type spotData = {
    spotId: number,
    coords: {alt: number, lat: number },
    name: string,
    desc: string,
    type: number,
    stars: number,
    police: number,
    images: string[],
    comments: [
        {
        user_id: number,
        comment: number,
        }
    ]
} */

const getSpots = async (spotId: number | null) => {
    const URL = import.meta.env.VITE_API_URL + "api/spots/getSpots"
    if(spotId) { 
        const response = await axios.post(URL, {spotId: spotId})
        if (!response.status) {
            throw new Error("Fock")
        }
     }

    axios.post(URL).then((data) => {
        return data.data
    })
}

  export default getSpots