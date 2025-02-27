import React from 'react';
import './SignupForm.css';
import {Link} from 'react-router-dom';

function SignupForm() {
  return (
    <>
        <div className='signup-form-container'>
            <p className='signup-text'>REGISTER</p>
            <form>
                <div className='input-field-set'>
                    <span className='input-field'>
                        <input type="text" name="name" placeholder='Name' required />
                    </span>
                    <span className='input-field'>
                        <input type="email" name='email' placeholder='Email' required />    
                    </span>
                </div>
                <div className='input-field-set'>
                    <span className='input-field'>
                        <input type="number" name="phone" placeholder='Phone' required />    
                    </span>
                    <span className='input-field'>
                        <input type="text" name='state' placeholder='State' required />
                    </span>
                </div>
                <div className='input-field-set'>
                    <span className='input-field'>
                        <input type="text" name="district" placeholder='District' required />    
                    </span>
                    <span className='input-field'>
                        <input type="text" name='address' placeholder='Address' required />
                    </span>
                </div>
                <div className='input-field-set'>
                    <span className='input-field'>
                        <input type="number" name="pincode" placeholder='Pincode' required />    
                    </span>
                    <span className='input-field'>
                        <input type="password" name="password" placeholder='Password' required />    
                    </span>
                </div>
                <div className='input-field-set'>
                    <span className='input-field'>
                        <input type="password" name="password" placeholder='Confirm Password' required />
                    </span>
                </div>
                <div className='terms-field'>
                    <input type='checkbox' name='terms' />
                    <Link to=''>I agree to Terms & Condition receiving marketing and promotional materials</Link>
                </div>
                <div className='btn-field'>
                    <button className='signup-btn'>Register</button>
                </div>
            </form>
        </div> 
    </>
  )
}

export default SignupForm
