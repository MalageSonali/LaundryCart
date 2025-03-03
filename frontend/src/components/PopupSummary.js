import React from 'react'
import Popup from 'reactjs-popup';
import '../styles/PopupSummary.css';

const PopupSummary = () => {
  return (
    
    <Popup trigger={<button className="view-btn"><img className="view-icon" src='/images/view.png' /></button>} position={"left"} >
        {
        close => (
        <div className='summary-container'>
            <div className='summary-header'>
                <p className='summary-text'>Summary</p>
                <button>X</button>
            </div>
        </div>
        )
        }
    </Popup>
  )
}

export default PopupSummary
