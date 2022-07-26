import React from "react";
import  css from './Top-collections-card.module.css';
import { CardButton } from "../CardButton/card-button.jsx";
import approve from '../../img/approve.svg';

export const TopCollectionsCard = (props) => {
    return (
        <div className={css.collectionCard}>
            <div className={css.picture}> 
                <img src={ props.imagePath } alt="nft-img" />
            </div>
            <div className={css.info}>
                <div className={css.top}>
                        <h3>{ props.name }<img src={approve} alt="approve" /></h3>
                    <span className={css.number}>{ props.number }</span>
                </div>
                <div className={css.bottom}>
                    <div className={css.data}>
                        <img src={ props.creatorIcon } alt="creator-img" />
                        <div>
                            <h3>{ props.price } { props.currency }</h3>
                            <span className={css.number}>Fixed Price</span>
                        </div>
                    </div>
                    <CardButton text="View more"/>
                </div>
            </div>
        </div>
    )
}