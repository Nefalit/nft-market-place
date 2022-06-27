import React from "react";
import  css from './big-card.module.css'; 
import { CardButton } from "../CardButton/card-button.jsx";
import { CardLikeButton } from "../CardLikeButton/card-like-button.jsx";
import approve from '../../img/approve.svg';

export const BigCard = (props) => {
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
                <div className={css.underMiddle}>
                    <div className={css.ownerInfo}>
                        <img src={ props.ownerIcon } alt="owner-image" />
                        <div>
                            <h3>{ props.ownerName }</h3>
                            <span>Owned by</span>
                        </div>
                    </div>
                    <div className={css.creatorInfo}>
                        <img src={ props.creatorIcon } alt="creator-image" />
                        <div>
                            <h3>{ props.creatorName }</h3>
                            <span>Created by</span>
                        </div>
                    </div>
                </div>
                <div className={css.bottom}>
                    <CardButton text="Buy now"/>
                    <CardLikeButton/>
                </div>
            </div>
        </div>
    )
}