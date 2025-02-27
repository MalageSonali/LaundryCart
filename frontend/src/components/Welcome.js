import React from 'react'
import './Welcome.css';

function Welcome({children}) {
  return (
    <>
        <div className='welcome-container'>
            <p className='app-name'>Laundry Service</p>
            <p className='app-desc'>Doorstep Wash & Dryclean Service</p>
            {children}
        </div>
    </>
  )
}

export default Welcome
