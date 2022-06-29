import React from "react";
import  css from './home-page.module.css';
import { SmallCard } from '../SmallCard/small-card';
import layer from '../../img/Layer.png';
import bigcard from '../../img/bigcard.png';
import homepageimg2 from '../../img/homepageimg2.png';
import homepageimg3 from '../../img/homepageimg3.png';
import homepageimg4 from '../../img/homepageimg4.png';


export const HomePage = (props) => {
    return (
        <div className={css.main}>
            <img className={css.layer} src={layer} alt="layer" />
            <div className={css.slogan}>
                <h1>Discover, <span>collect</span> and <span>sale</span> <br />
                    extraordinary <strong>NFTs</strong></h1>
            </div>
            <div className={css.cards}>
            <SmallCard
                name="Cute Morning Cafe" 
                price="30.5" 
                currency="SOL" 
                author="Ben Colfex"
                imagePath={bigcard}>
            </SmallCard>
           <SmallCard
                name="Cute Morning Cafe" 
                price="30.5" 
                currency="SOL" 
                author="Ben Colfex"
                imagePath={homepageimg2}>
            </SmallCard>
            <SmallCard
                name="Cute Morning Cafe" 
                price="30.5" 
                currency="SOL" 
                author="Ben Colfex"
                imagePath={homepageimg3}>
            </SmallCard>
            <SmallCard
                name="Cute Morning Cafe" 
                price="30.5" 
                currency="SOL" 
                author="Ben Colfex"
                imagePath={homepageimg4}>
            </SmallCard>
            </div>
        </div>
    )
}