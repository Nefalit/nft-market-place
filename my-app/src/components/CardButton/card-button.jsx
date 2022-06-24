import React from "react";
import css from './card-button.module.css'; 
import Arrow from '../../img/Arrow.svg';

export const CardButton = (props) => {
    return (
        <button className={css.cardButton}> 
            <span>{ props.text }</span> 
            <img src={Arrow} alt="" />
        </button>
    )
}