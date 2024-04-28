import React from 'react'
import Logo from "./Img/myteam.svg"
import { Link } from 'react-router-dom'
import './header.css'
function Header() {
  return (
    <div className='header'>
        <div className="header_wrapper">
          <div className="left_side">
            <img src={Logo} alt="" />
            <ul>
              <li className='header_list_li'><Link to='/'>Home</Link></li>
              <li className='header_list_li'><Link to='/About'>About</Link></li>
            </ul>
            </div>
            <button className='header_button_contact'><Link to='/Contact'>Contact us</Link></button>

        </div>
    </div>
  )
}

export default Header