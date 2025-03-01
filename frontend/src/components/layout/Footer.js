import React from 'react';
import '../../styles/Footer.css';
import PreFooter from '../PreFooter';

function Footer() {
  return (
    <>
        <div className='footer-container'>
            <PreFooter/>
            <div className='lower-footer'>
                <p className='footer-text'>2025 &copy; Laundry</p>
            </div>
        </div>
    </>
  )
}

export default Footer
