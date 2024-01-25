import React from 'react'
import './Nav.scss'
import brand_logo from '../assets/brand_logo.svg'

const Nav = () => {
  return (
    <header className='n-body'>
        <div className="container">
            <div className="logo">
                <img src={brand_logo} alt="Brand logo" />
            </div>
            <ul>
                <li>MENU</li>
                <li>LOCATION</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
            <div className="btns">
                <button>Login</button>
            </div>
        </div>
    </header>
  )
}

export default Nav