import React from 'react';
import '../styles/SigninForm.css';
import axios from 'axios'
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useUser } from '../context/user';

function SigninForm() {

  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useUser();

  const navigate = useNavigate();
  const location = useLocation();

  const handleSignin = async (e) => {
    e.preventDefault();
    try{
      //validation
      /*
      const phoneRegex = /^[0-9]{10}$/;
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if(!phoneRegex.test(credential)){
        setError("Please enter a valid phone number");
      }else if(!emailRegex.test(credential)){
        setError("Please enter a valid Email");
      }
    */
        const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/users/login`, {credential, password});
        if(res && res.data.success){
          toast.success(res.data && res.data.message);
          setUser({
            ...user,
            currUser: res.data.user,
            token: res.data.token
          })
          localStorage.setItem("currUser", JSON.stringify(res.data));
          navigate(location.state || '/');
        }else{
          toast.error("Wrong Password");
        }
      
    }catch{
      console.log("Something went wrong");
      toast.error("Something went Wrong");
    }
  }
  return (
    <>
      <div className='signin-form-container'>
        <p className='signin-text'>SIGN IN</p>
        <form onSubmit={handleSignin}>
            <div className={({error} ? 'mobile-or-email-input error' : 'mobile-or-email-input')}>
                <input type="text" name="mobile-or-email" onChange={(e) => setCredential(e.target.value)} placeholder='Mobile / Email' required />
            </div>
            {error && <p className='errMsg' style={{color: "#EF1A1A"}}>{error}</p>}
            <div className='password-input'>
                <input type={showPassword ? "text" : "password"} name="password" onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
                <div className='padlock' onClick={() => setShowPassword(!showPassword)}></div>
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
