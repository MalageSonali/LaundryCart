import React from 'react';
import './CtaRegister.css';
import { useNavigate } from 'react-router-dom';

function CtaRegister() {
    const navigate = useNavigate();
    const goToSighUp = () => {
        navigate('/signup');
    }
  return (
    <>
        <p className='cta-text'>Don’t Have An Account?</p>
        <button className='cta-btn' onClick={goToSighUp}>Register</button>
    </>
  )
}

export default CtaRegister
