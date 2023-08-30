import React from 'react';
import "./Footer.scss";

export default function Footer() {
  return (
    <footer id='Footer'>
      <div id='Footer_First'></div>
      <div id='Footer_Second'>
        <div id='Footer_Second_Links'>
          <h4>Site Links</h4>
          <ul>
            <li>Home</li>
            <li>Menus</li>
            <li>Booking</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div id='Footer_Second_Socials'>
          <h4>Follow Us</h4>
          <ul>
            <li><img src="./Resources/Facebook.svg" alt="Facebook" /></li>
            <li><img src="./Resources/Twitter.svg" alt="Twitter" /></li>
            <li><img src="./Resources/Instagram.svg" alt="Instagram" /></li>
            <li><img src="./Resources/YouTube.svg" alt="YouTube" /></li>
          </ul>
          <ul>
            <li id='PhoneNumber'>(907) 822-3605</li>
            <li id='direction'>2417 Tongass Ave #111, Ketchikan, Alaska 99901, USA</li>
          </ul>
        </div>
        <div id='Footer_Second_Contact'>
          <h4>Receive the best offers </h4>
          <input type="text" id='Contact_footer' />
          <label htmlFor="Contact_footer">+</label>
        </div>
      </div>
    </footer>
  )
}
