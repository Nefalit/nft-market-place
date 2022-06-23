import React from "react";
import './card-button.css'; 
import Arrow from '../../img/Arrow.svg';

export const CardButton = (props) => {
    return (
        <button className="card-button"> 
            <span>{ props.text }</span> 
            <img src={Arrow} alt="" />
        </button>
    )
}