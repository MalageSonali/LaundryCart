import React from 'react';
import './Footer.css';
import PreFooter from '../PreFooter';

function Footer() {
  return (
    <>
        <div className='footer-container'>
            <PreFooter/>
            <div className='lower-footer'>
                <p className='footer-text'>2021 &copy; Laundry</p>
            </div>
        </div>
    </>
  )
}

export default Footer
