import Button from '../components/Button';
import Header from '../components/Header';
import '../css/login.scss';
import phoneImg from '../img/aboutPhone.png'

const Login = () => {
  return (
    <>
    <div id='login-wrapper'>
      <Header/>
      <main>
        <div id='form-img'>
            <img src={phoneImg} alt="" />
        </div>
        <form action="">
            <h2><span className='accent'>Login</span> your account</h2>
            <label> Username</label>
            <input type="text" />
            <label> Password</label>
            <input type="text" />
            <Button submit={true} color='orange' style='fill'>Login</Button>
        </form>
      </main>
    </div>
    </>
  )
};

export default Login;
