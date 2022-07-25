import React from "react";
import css from './filter-button.module.css'; 

export const FilterButton = (props) => {
    return (
        <button className={css.filterButton}> 
            <img src={props.imagePath} alt="filterImg" />
            <span>{ props.text }</span> 
        </button>
    )
}