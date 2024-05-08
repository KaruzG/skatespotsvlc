import Button from '../Button';
import './style.scss'


const AddSpotForm = () => {
  return (
    <>
      <section>
        <h3>New Spot</h3>

        <form action="">
          <label htmlFor="">Basic info</label>
          <input type="text" name="" placeholder="Spot Name" id="" />
          <textarea name="" id="" placeholder='Description'></textarea>
          <label htmlFor="">Coords</label>
          <div className='coords'>
            <input type="text" name="" placeholder="Altitude" id="" />
            <input type="text" name="" placeholder="Latitude" id="" />
          </div>
          <label htmlFor="">Image of the spot</label>
          <input type="file" name="" placeholder="Spot Name" id="" />
          <Button color='orange' innerText='Submit' style='fill' size='s'/>
        </form>
      </section>
    </>
  );
}

export default AddSpotForm;
