import React from "react";
import css from './card-like-button.module.css'; 


export const CardLikeButton = () => {
    return (
        <div>
        <label class={css.likeButton}>
            <input type="checkbox"></input>
            <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.0067 24.8453C11.1467 23.0742 8.48836 20.9963 6.07905 18.6485C4.37622 16.9472 3.07991 14.883 2.28697 12.6102C0.873193 8.18393 2.52477 3.13663 7.17569 1.63037C8.38072 1.24355 9.66088 1.15087 10.9091 1.36005C12.1572 1.56923 13.3372 2.07416 14.3503 2.8327V2.8327C15.3619 2.07627 16.5395 1.5725 17.7852 1.36335C19.0309 1.15421 20.3085 1.24578 21.5116 1.63037C26.1626 3.13663 27.8274 8.23678 26.4136 12.6102C25.627 14.886 24.3298 16.9515 22.6215 18.6485C20.2122 20.9963 17.5539 23.0742 14.6938 24.8453L14.3899 25.0303L14.0067 24.8453Z" stroke="#7D8CAC" stroke-width="1.98193" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </label>
        </div>
    )
}
