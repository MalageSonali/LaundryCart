import React from 'react';
import './Sidebar.css';

function Sidebar(){
    return(
        <>
            <nav>
                <ul className='side-container'>
                    <li>
                        <div className='nav-home'>
                            <p className='home-icon'></p>
                        </div>
                    </li>
                    <li>
                        <div className='nav-more'>
                            <p className='more-icon'></p>
                        </div>
                    </li>
                    <li>
                        <div className='nav-list'>
                            <p className='list-icon'></p>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Sidebar;