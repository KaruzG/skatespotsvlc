import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../Button';
import './style.scss'
import uploadSpotImg from '../../utils/uploadSpotImg';

interface AddSpotFormData {
  name: string,
  desc: string,
  coords: {alt: number, lat: number },
  type: number,
  stars: number,
  police: number,
  files: File,
  token: string | null
  spotId: number,
}

const AddSpotForm = () => {

  const { register, handleSubmit } = useForm<AddSpotFormData>()
  const onSubmit: SubmitHandler<AddSpotFormData> = async (values) => {
    console.log("SE ENVíA")
    console.log(values)
    const URL = import.meta.env.VITE_API_URL + "api/spots/spot"
    const OPTIONS = {
      method: 'POST',
      headers: {
        Accept: "application/json",
        'Content-Type': "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(values)
    }

    fetch(URL, OPTIONS)
      .then((response) => response.json())
      .then(async (data) => {
        console.log("SE RECIBE")
        console.log(data)
        await uploadSpotImg(data.spotId, data._id, values.files[0])
      })

  }

  return (
    <>
      <section id='add-spot-form'>
        <h3>New Spot</h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Basic info</label>
          <input type="text" placeholder="Spot Name" {...register("name", {required: true})} />
          <textarea placeholder='Description' {...register("desc")} />

          <label htmlFor="">Coords</label>
          <div className='coords'>
            <input type="number" placeholder="Altitude" {...register("coords.alt")} />
            <input type="number" placeholder="Latitude" {...register("coords.lat")}/>
          </div>

          <label htmlFor="">Rating (1-5)</label>
          <div>
            <input type="number" placeholder='Stars' {...register("stars")} />
            <input type="number" placeholder='Police Risk' {...register("police")} />
          </div>

          <label htmlFor="">Type of spot</label>
          <select {...register("type")}>
            <option value="1">Street spot</option>
            <option value="2">Skatepark</option>
            <option value="3">Shop</option>
          </select>

          <label htmlFor="">Image of the spot</label>
          <input type="file" placeholder="Spot Name" {...register("files")}/>
          <Button submit={true} color='orange' style='fill' size='auto'>Submit</Button>
        </form>
      </section>
    </>
  );
}

export default AddSpotForm;
