import React from 'react';

import "./Customers.scss";

export default function Customers(props) {
  return (
    <div id='Customer'>
        <div id='Customer_Opinion'>
            <p>{props.data.opinion} </p>
        </div>
        <div id='Customer_Info'>
            <p>{props.data.name}</p>
            <img src="./Resources/Starts.svg" alt="Starts" id='Customer_Info_Starts'/>
            <img src={`./Resources/${props.data.img}`} alt="Starts" id='Customer_Info_Profile'/>
        </div>
    </div>
  )
}
