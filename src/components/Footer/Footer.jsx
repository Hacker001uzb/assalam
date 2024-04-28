import React from 'react'
import './footer.css'
import Links from './img/Group 31.png'
import Logo from "./img/myteam.svg"
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer'>
      <div className="footer_wrapper">
        <div className="section_1_footer">
          <img src={Logo} alt="" />
          <ul>
                <li className='footer_list_li'><Link to='/'>Home</Link></li>
                <li className='footer_list_li'><Link to='/About'>About</Link></li>
              </ul>
        </div>
        <div className="section_2_footer">
            <p>987  Hillcrest Lane <br />Irvine, CA <br />California 92714 <br />Call Us : 949-833-7432</p>
          </div>
          <div className="section_3_footer">
            <img src={Links} alt="" />
            <p>Copyright 2020. All Rights Reserved</p>
          </div>
      </div>
    </div>
  )
}

export default Footer