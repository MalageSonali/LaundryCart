import React, {useState} from 'react';
import '../styles/SignupForm.css';
import {Link, useNavigate} from 'react-router-dom';
import stateData from '../data/states-and-districts.json';
import axios from 'axios';
import toast from 'react-hot-toast';

function SignupForm() {
    //state variables
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState();
    const [state, setState] = useState("");
    const [district, setDistrict] = useState("");
    const [address, setAddress] = useState("");
    const [pincode, setPincode] = useState();
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [districtsList, setDistrictsList] = useState([]);
    
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/users/register`, {name, email, phone, state, district, address, pincode, password});
            if(res && res.data.success){
                toast.success(res.data && res.data.message)
                navigate('/signin');
            }else{
                console.log(res.data.message);
            }
        }catch{
            console.log("Something went wrong");
        }
    }

    const changeState = (e) => {
        setState(e.target.value);
        setDistrictsList(stateData.states.find(st => st.state === e.target.value).districts);
    }

  return (
    <>
        <div className='signup-form-container'>
            <p className='signup-text'>REGISTER</p>
            <form onSubmit={handleSubmit}>
                <div className='input-field-set'>
                    <input type="text" name="name" className='input-field' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' required />
                    <input type="email" name='email' className='input-field' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />    
                </div>
                <div className='input-field-set'>
                    <input type="number" name="phone" className='input-field' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone' required />    
                    <select name='state' className='input-field' value={state} onChange={changeState} placeholder='State' required>
                        <option value="">State</option>
                        {stateData.states.map( st => 
                            <option value={st.state}>{st.state}</option>
                        )}
                    </select>
                </div>
                <div className='input-field-set'>
                    <select name="district" className='input-field' value={district} onChange={(e) => setDistrict(e.target.value)} placeholder='District' required>
                        <option value="">District</option>
                        {districtsList.map(ds => 
                            <option value={ds}>{ds}</option>
                        )}  
                    </select>    
                    <input type="text" name='address' className='input-field' value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Address' required />
                </div>
                <div className='input-field-set'>
                    <input type="number" name="pincode" className='input-field' value={pincode} onChange={(e) => setPincode(e.target.value)} placeholder='Pincode' required />    
                    <input type="password" name="password" className='input-field' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />    
                </div>
                <div className='input-field-set'>
                        <input type="password" name="confirm-password" className='input-field' value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)} placeholder='Confirm Password' required />
                        <div className='input-field'></div>
                </div>
                <div className='terms-field'>
                    <input type='checkbox' name='terms' />
                    <Link to='' className='terms-text'>I agree to Terms & Condition receiving marketing and promotional materials</Link>
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
