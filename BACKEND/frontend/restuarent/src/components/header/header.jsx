import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import phone from '../../media/user.png'
import cart from '../../media/grocery-store.png'
import search from '../../media/magnifying-glass-search.png'
import logo from '../../media/Sikh_Lion_Khanda_Symbol_Tote___Khanda-sikh-symbol-removebg-preview.png'
const header = () => {
  return (
  <header>
    <div className='mainDiv'>
   <div className='search'>
    <img src={phone} />
   </div>
   <div className='search'>
    <img src={cart} />
   </div>
   <div className='search'>
    <img src={search} />
   </div>
   </div>
   <div className='mainLogo'>
   <div className='logo'>
    <h1>FoODieS</h1>
   </div>
   </div>
   <div className='menu'>
    <ul>
     <li><Link to='/'>Home</Link></li>
     <li><Link to='/service'>Service</Link></li>
     <li><Link to='/menu'>Menu</Link></li>
     <li><Link to='/about'>About</Link></li>
    </ul>
   </div>

  </header>
  )
}

export default header
