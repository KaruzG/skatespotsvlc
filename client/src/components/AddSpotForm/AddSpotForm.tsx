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
  files: FileList,
  token: string | null
  spotId: number,
}

const AddSpotForm = () => {

  const { register, handleSubmit, reset } = useForm<AddSpotFormData>()
  
  const onSubmit: SubmitHandler<AddSpotFormData> = async (values) => {
    // Round coords
/*     values.coords.alt = parseFloat((values.coords.alt).toFixed(5)) */
/*     values.coords.alt = parseFloat((values.coords.lat).toFixed(5)) */

    
    const URL = import.meta.env.VITE_API_URL + "api/spots/"
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
        for (let i = 0; i < values.files.length; i++) { // Would be better to send all at once and iterate in backend
          await uploadSpotImg(data.spotId, data._id, values.files[i])
          reset()
        }
      })

  }

  // Alerta en el addSpot de que se ha añadido

  return (
    <>
      <section id='add-spot-form'>
        <h3>New Spot</h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Basic info</label>
          <input required type="text" placeholder="Spot Name" {...register("name", {required: true})} />
          <textarea required placeholder='Description' {...register("desc")} />

          <label htmlFor="">Coords</label>
          <div className='coords'>
            <input type="number" step={0.00000000000000001} required placeholder="Latitude" {...register("coords.lat")} />
            <input type="number" step={0.00000000000000001} required placeholder="Altitude" {...register("coords.alt")}/>
          </div>

          <label htmlFor="">Rating (1-5)</label>
          <div>
            <input type="number" step={0.5} placeholder='Stars' {...register("stars")} />
            <input type="number" placeholder='Police Risk' {...register("police")} />
          </div>

          <label htmlFor="">Type of spot</label>
          <select {...register("type")}>
            <option value="0">Street spot</option>
            <option value="1">Skatepark</option>
            <option value="2">Shop</option>
          </select>

          <label htmlFor="">Image of the spot</label>
          <input required type="file" multiple placeholder="Spot Name" {...register("files")}/>
          <Button submit={true} color='orange' style='fill' size='auto'>Submit</Button>
        </form>
      </section>
    </>
  );
}

export default AddSpotForm;
