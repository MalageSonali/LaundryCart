import React from 'react'
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
        <nav>
            <ul className='nav-container'>
                <NavLink to="/">
                    <li className='logo-container'>
                        <p className='logo-text'>LAUNDRY</p>
                    </li>
                </NavLink>
                <NavLink to="/" className={({isActive}) => (isActive ? "nav-home nav-item active" : "nav-home nav-item")}>
                    <li>
                        <p className='text'>Home</p>
                    </li>
                </NavLink>
                <NavLink to="/pricing" className={({isActive}) => (isActive ? "nav-pricing nav-item active" : "nav-pricing nav-item")}>
                    <li>
                        <p className='text'>Pricing</p>
                    </li>
                </NavLink>
                <NavLink to="/career" className='nav-career nav-item'>
                    <li>
                        <p className='text'>Career</p>
                    </li>
                </NavLink>
                <NavLink to="/signin" className='nav-signin nav-item'>
                    <li>
                        <p className='text'>Sign In</p>
                    </li>
                </NavLink>
                
                {/*
                <li>
                    <NavLink to="/user-profile" className="user">
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
                    </NavLink>
                </li>
                */}
            </ul>
        </nav>
    </>
  )
}

export default Header
