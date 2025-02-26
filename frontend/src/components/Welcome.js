import React from 'react'
import './Welcome.css';

function Welcome() {
  return (
    <>
        <div className='welcome-container'>
            <p className='app-name'>Laundry Service</p>
            <p className='app-desc'>Doorstep Wash & Dryclean Service</p>
            <p className='cta'>Don’t Have An Account?</p>
            <button className='register-btn'>Register</button>
        </div>
    </>
  )
}

export default Welcome
