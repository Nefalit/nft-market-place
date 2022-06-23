import React from "react";
import './small-card.css'; 
import approve from '../../img/approve.svg';
import like from '../../img/like.svg';
import { CardButton } from "../CardButton/card-button.jsx";

export const SmallCard = (props) => {
    return (
        <div className="item-card">
            <div className="picture"> 
                <img src={ props.imagePath } alt="" />
            </div>
            <div className="info">
                <div className="top">
                    <h3>{ props.name }</h3>
                    <span className="price">{ props.price } { props.currency }</span>
                </div>
                <div className="middle">
                    <p>{ props.author }</p>
                    <img src={approve} alt="" />
                </div>
                <div className="bottom">
                    <CardButton text="Buy now"/>
                    <img src={like} alt="" />
                </div>
            </div>
        </div>
    )
}