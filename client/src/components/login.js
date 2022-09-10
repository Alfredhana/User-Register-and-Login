
import {react, useState} from 'react';

const Login = () => {
    return (
        <form>
            <h3>Login</h3>
            <div className='mb-3'>
                <label>Full Name</label>
                <input 
                    type = "fullName"
                    className='form-control'
                    placeholder='Enter your full name'
                />
            </div>
            <div className='mb-3'>
                <label>User Name</label>
                <input 
                    type = "userName"
                    className='form-control'
                    placeholder='Enter your user name'
                />
            </div>
            <div className='mb-3'>
                <label>Password</label>
                <input 
                    type = "password"
                    className='form-control'
                    placeholder='Enter your password'
                />
            </div>
            <div className='mb-3'>
                <label>Email Address</label>
                <input 
                    type = "email"
                    className='form-control'
                    placeholder='Enter your email address'
                />
            </div>
            <div className='mb-3'>
                <div className='custom-control custom-checkbox'>
                    <input
                        type = "checkbox"
                        className='custom-control-input'
                        id="customCheck"
                    />
                    <label className='custom-control-label' htmlFor='customCheck'>
                        Remember Me
                    </label>
                </div>
            </div>
            <div className="d-grid">
                <button type = "submit" className='btn btn-primary'>
                    Submit
                </button>
            </div>
            <p className='forgot-password text-right'>
                <a href="/register">Register</a>
            </p>
        </form>
    )
}

export default Login;