import React from 'react';

import "./Card.scss";

export default function Card(props) {
  return (
    <div id='Card'>
      <img src={`./Resources/${props.data.img}`} alt={props.data.name} id="Card_Img"/>
      <div id='Card_Info'>
        <p>{props.data.name}</p>
        <img src="./Resources/Starts.svg" alt="Starts" />
        <div>+</div>
      </div>
    </div>
  )
}
