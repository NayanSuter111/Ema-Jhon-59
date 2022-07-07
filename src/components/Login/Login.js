import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signinUsingGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const redirect_uri = location.state?.from || '/shop';

    const handelGoogleLogin = () => {
        signinUsingGoogle()
            .then(result => {
                navigate(redirect_uri)
            })
    }

    return (
        <div className='login-form'>
            <div>
                <h2>Please Login</h2>
                <form action="">
                    <input type="email" name="" id="" placeholder='Your email' />
                    <br />
                    <input type="password" name="" id="" placeholder='Your password' />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to Ema-john ? <Link to='/register'>Create account</Link></p>
                <p>----------------- Or ------------------</p>
                <button
                    onClick={handelGoogleLogin}
                    className='btn-regular'
                >Signin Using Google</button>
            </div>
        </div>
    );
};

export default Login;