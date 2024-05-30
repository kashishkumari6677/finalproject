import React from 'react'
import './nav.css'
import Location from '../../media/location (1).png'
import Call from '../../media/phone.png'
import Gmail from '../../media/gmail.png'
const Nav=()=>{
  return (
  <nav>
  <div className='info'>
     <img src={Location}/>
     <h3>Hyderabad Pakistan</h3>
  </div>
  <div className='info'>
    <img src={Call} />
    <h3>03033333333</h3>
    </div>
    <div className='info'>
    <img src={Gmail} />
    <h3>aneelkashish@gmail.com</h3>
    </div>
  </nav>
   
  )}

export default Nav
