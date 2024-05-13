import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../components/Button';
import Header from '../components/Header';
import '../css/login.scss';
import phoneImg from '../img/aboutPhone.png'
import login from '../utils/login';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface LoginFormData {
    username: string,
    password: string
}

const Login = () => {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm<LoginFormData>()
    const [alertContainer, setAlertContainer] = useState(<></>)
    const failLogin = <p id='wrongCredentials'>User doesn't exists or wrong password!</p>

    const handleLogin: SubmitHandler<LoginFormData> = async (values) => {
        setAlertContainer(<></>)
        if (await login(values)) {
          navigate("/admin")
        } else {
          setAlertContainer(failLogin)
        }
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
            <Button submit={true} color='orange' style='fill'>Login</Button>
            {alertContainer}
        </form>
      </main>
    </div>
    </>
  )
};

export default Login;
