import React from 'react';
import '../styles/Navbar.css';

function Navbar(){
    return(
        <>
            <nav>
                <ul className='nav-container'>
                    <li>
                        <div className='logo-container'>
                            <p className='logo-text'>LAUNDRY</p>
                        </div>
                    </li>
                    <li>
                        <div className='nav-pricing'>
                            <p className='text'>Pricing</p>
                        </div>
                    </li>
                    <li>
                        <div className='nav-career'>
                            <p className='text'>Career</p>
                        </div>
                    </li>
                    <li>
                        <ul  className='nav-user'>
                            <li>
                                <div className='user-photo'></div>
                            </li>
                            <li>
                                <div className='user-name'>
                                    <p className='user-text'>User Name</p>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
