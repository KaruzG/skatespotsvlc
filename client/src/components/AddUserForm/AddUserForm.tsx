import './style.scss'

const AddUserForm = () => {
  return (
    <>
      <section>
        <h3>New User</h3>
        <form action="">
          <label htmlFor="asd">Username:</label>
          <input type="text" name="" placeholder="Username" id="" />
          <label htmlFor="asd">Password:</label>
          <input type="password" name="" placeholder="Password" id="" />
          <label htmlFor="asd">Role:</label>
          <select name="" id="">
            <option value="">User</option>
            <option value="">Admin</option>
          </select>
        </form>
      </section>
    </>
  );
}

export default AddUserForm;
