import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {
    const {user , singInUsingGoogle} = useFirebase();
    return (
        <div className='login-form'>
            <div>
                <h2>Login</h2>
                  <form action="" onSubmit="">
                     <input type="email" name="" id="" placeholder='Your email'/>
                     <br />
                     <input type="password" name="" id="" placeholder='Your password'/>
                     <br />
                     <input type="submit" value="Login" />
                  </form>
                  <p>New to Ema John? <Link to="/register">Create Account</Link></p>
                  <div>      
                     {/* <p>blank</p> */}
                  </div>

                  <button onClick={singInUsingGoogle} className='btn-regular'>
                      Google Sing In
                      </button>
            </div>

        </div>
    );
};

export default Login;