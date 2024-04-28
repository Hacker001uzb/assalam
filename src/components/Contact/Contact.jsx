import React from 'react'
import './contact.css'
import person from './img/Group 11.png'
import tick from './img/Group 12.png'
import raise from './img/Group 13.png'


function Contact() {
  return (
    <div className='contact'>
        <div className="contact_wrapper">
            <div className="left_side_contact">
              <h1>Contact</h1>
              <h4>Ask us about</h4>
              <p><img src={person} alt="" />The quality of our talent network</p>
              <p><img src={tick} alt="" />Usage & implementation of our software</p>
              <p><img src={raise} alt="" />How we help drive innovation</p>
            </div>
            <div className="right_side_contact">
              <input type="text" placeholder='Name'  /><hr />
              <input type="email"   placeholder='Email Adress' /><hr />
              <input type="text"   placeholder='Company Name' /><hr />
              <input type="text"   placeholder='Title' /><hr />
              <input type="text"  placeholder='Message' /><hr />
              <button>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Contact