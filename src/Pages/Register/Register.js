import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate();
    const navigateLogin =() =>{
        navigate('/login');
    }
const handleRegister = event =>{
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(name, email, password)
}

    return (
        <div className='register-form'>
            <h1 style={{textAlign : 'center'}}>Please Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Please enter your name' />
                <br/>
                <input type="email" name="email" id="" placeholder='Enter your Email'/>
                <br/>
                <input type="password" name="password" id="" placeholder='Enter password' />
                <br/>
                <input type="submit" value="Register" />
            </form>
            <p>Already have a account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Login</Link></p>
        </div>
    );
};

export default Register;