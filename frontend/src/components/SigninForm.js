import React from 'react';
import './SigninForm.css';

function SigninForm() {
  return (
    <>
      <div className='signin-form-container'>
        <p className='signin-text'>SIGN IN</p>
        <form>
            <div className='mobile-or-email-input'>
                <input type="text" name="mobile-or-email" placeholder='Mobile / Email' required />
            </div>
            <div className='password-input'>
                <input type="password" name="password" placeholder='Password' required />
                <div className='padlock'></div>
            </div>
            <p className='message'>Forget Password?</p>
            <button className='signin-btn'>Sign In</button>
        </form>
      </div>
    </>
  )
}

export default SigninForm
