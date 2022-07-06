import React from "react";
import  css from './home-page.module.css';
import { SmallCard } from '../SmallCard/small-card';
import layer from '../../img/Layer.png';


export const HomePage = (props) => {
    const smallCardsArray = [
        {
            id: 1,
            name: 'Cute Morning Cafe',
            price: 40.5,
            currency: 'SOL',
            author: 'Billy Harrington',
            imagePath: 'https://i.pinimg.com/originals/4b/82/19/4b821981c5804b3690d1bdc141ce9859.png'
        },
        {
            id: 2,
            name: 'Good Evening Cafe',
            price: 50.5,
            currency: 'SOL',
            author: 'Roman Chaus',
            imagePath: 'https://i.pinimg.com/originals/4b/82/19/4b821981c5804b3690d1bdc141ce9859.png'
        },
        {
            id: 3,
            name: 'Good Afternoon Cafe',
            price: 60.5,
            currency: 'SOL',
            author: 'Adolf Dakh',
            imagePath: 'https://i.pinimg.com/originals/4b/82/19/4b821981c5804b3690d1bdc141ce9859.png'
        },
        {
            id: 4,
            name: 'Cute Night Cafe',
            price: 70.5,
            currency: 'SOL',
            author: 'Ben Stiller',
            imagePath: 'https://i.pinimg.com/originals/4b/82/19/4b821981c5804b3690d1bdc141ce9859.png'
        }
    ];

    return (
        <div className={css.main}>
            <img className={css.layer} src={layer} alt="layer" />
            <div className={css.slogan}>
                <h1>Discover, <span>collect</span> and <span>sale</span> <br />
                    extraordinary <strong>NFTs</strong></h1>
            </div>
            <div className={css.cards}>
                {smallCardsArray.map(({ id, name, price, currency, author, imagePath }) => (
                    <SmallCard
                        key={id}
                        name={name}
                        price={price}
                        currency={currency}
                        author={author}
                        imagePath={imagePath}>
                    </SmallCard>
                ))}
            </div>
        </div>
    )
}