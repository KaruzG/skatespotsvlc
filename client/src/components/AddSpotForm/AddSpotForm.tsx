import Button from '../Button';
import './style.scss'


const AddSpotForm = () => {
  return (
    <>
      <section>
        <h3>New Spot</h3>

        <form action="">
          <input type="text" name="" placeholder="Spot Name" id="" />
          <input type="text" name="" placeholder="Description" id="" />
          <div className='coords'>
            <input type="text" name="" placeholder="Altitude" id="" />
            <input type="text" name="" placeholder="Latitude" id="" />
          </div>
          <input type="file" name="" placeholder="Spot Name" id="" />
          <Button color='orange' innerText='Submit' style='fill' size='s'/>
        </form>
      </section>
    </>
  );
}

export default AddSpotForm;
