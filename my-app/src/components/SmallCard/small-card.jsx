import React from "react";
import  css from './small-card.module.css'; 
import approve from '../../img/approve.svg';
import like from '../../img/like.svg';
import { CardButton } from "../CardButton/card-button.jsx";

export const SmallCard = (props) => {
    return (
        <div className={css.itemCard}>
            <div className={css.picture}> 
                <img src={ props.imagePath } alt="nft-image" />
            </div>
            <div className={css.info}>
                <div className={css.top}>
                    <h3>{ props.name }</h3>
                    <span className={css.price}>{ props.price } { props.currency }</span>
                </div>
                <div className={css.middle}>
                    <p>{ props.author }</p>
                    <img src={approve} alt="approve" />
                </div>
                <div className={css.bottom}>
                    <CardButton text="Buy now"/>
                    <img src={like} alt="like" />
                </div>
            </div>
        </div>
    )
}