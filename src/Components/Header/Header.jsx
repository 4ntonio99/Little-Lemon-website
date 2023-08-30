import React from 'react';
import "./Header.scss";
import { Link } from 'react-router-dom';

export default function Header() {

  

  return (
    <header id='Header'>
        <img src="./Resources/Logo.png" alt="Logo" id='Header_Logo'/>
        <nav id='Header_Nav'>
          <div id='Header_Nav_Burger'></div>
          <ul>
            <Link to={"/"}><li>Home</li></Link>
            <Link ><li>Menus</li></Link>
            <Link to={"/Booking"}><li>Booking</li></Link>
            <Link><li>Contact Us</li></Link>
            <img src="./Resources/User.svg" alt="User"/>
          </ul>
        </nav>
    </header>
  )
}
