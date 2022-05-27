import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className='register-form'>
            <div>
                <h2>Create Account</h2>
                <form>
                    <input type="email" name="" id="" placeholder='your email' />
                    <br />
                    <input type="password" name="" id="" placeholder='Enter password' />
                    <br />
                    <input type="password" name="" id="" placeholder=' re-enter password' />
                    <br />
                    <input type="submit" value="submit" />
                    </form>
                    <p>Already have an Account? <Link to='/login'>login</Link> </p>
                    <div>
                        {/* <p>blank</p> */}
                    </div>
                    <button className='btn-regular'>Google Sing In </button>

                   
            </div>
        </div>
    );
};

export default Register;