import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='login-form'>
            <div>
                <h2>Create a new Account</h2>
                <form action="">
                    <input type="email" name="" id="" placeholder='Email' />
                    <br />
                    <input type="password" name="" id="" placeholder='Your Password' />
                    <br />
                    <input type="password" name="" id="" placeholder='Re-enter Your Password' />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account ? <Link to='/login'>Login</Link></p>
                <p>----------------- Or ---------------</p>
                <button className='btn-regular'>Google Sign-in</button>
            </div>
        </div>
    );
};

export default Register;