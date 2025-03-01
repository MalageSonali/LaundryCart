import React from 'react';
import '../styles/SigninForm.css';
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function SigninForm() {

  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSignin = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/users/login`, {credential, password});
      if(res && res.data.success){
        toast.success(res.data && res.data.message);
        navigate('/');
      }
    }catch{
      console.log("Something went wrong");
    }
  }
  return (
    <>
      <div className='signin-form-container'>
        <p className='signin-text'>SIGN IN</p>
        <form onSubmit={handleSignin}>
            <div className='mobile-or-email-input'>
                <input type="text" name="mobile-or-email" onChange={(e) => setCredential(e.target.value)} placeholder='Mobile / Email' required />
            </div>
            <div className='password-input'>
                <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
                <div className='padlock'></div>
            </div>
            <p className='message'>Forget Password?</p>
            <div className='signin-btn-container'>
              <button className='signin-btn'>Sign In</button>
            </div>
            
        </form>
      </div>
    </>
  )
}

export default SigninForm
