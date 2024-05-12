import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../components/Button';
import Header from '../components/Header';
import '../css/login.scss';
import phoneImg from '../img/aboutPhone.png'
import login from '../api/login';

interface LoginFormData {
    username: string,
    password: string
}

const Login = () => {
    const { register, handleSubmit } = useForm<LoginFormData>()

    const handleLogin: SubmitHandler<LoginFormData> = async (values) => {
        try {
            console.log( await login(values))
        } catch (error) {
            console.log('Error loggin in!')
        }
    }

    function loginad() {
      localStorage.setItem("token", "tasdasdasd")
    }

  return (
    <>
    <Header/>
    <div id='login-wrapper'>
      <main>
        <div id='form-img'>
            <img src={phoneImg} alt="" />
        </div>
        <form onSubmit={handleSubmit(handleLogin)}>
            <h2><span className='accent'>Login</span> your account</h2>
            <label> Username</label>
            <input type="text" {...register("username")}/>
            <label> Password</label>
            <input type="password" {...register("password")}/>
            <Button onClick={loginad} submit={true} color='orange' style='fill'>Login</Button>
        </form>
      </main>
    </div>
    </>
  )
};

export default Login;
