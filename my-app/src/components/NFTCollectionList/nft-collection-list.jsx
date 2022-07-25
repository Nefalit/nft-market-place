import React from "react";
import  css from './nft-collection-list.module.css';
import { SmallCard } from '../SmallCard/small-card';
import { FilterButton } from "../FilterButton/filter-button.jsx";
import saleType from '../../img/saleType.svg';
import priceRange from '../../img/priceRange.svg';
import attributes from '../../img/attributes.svg';
import sortBy from '../../img/sortBy.svg';
import sillyCat from '../../img/sillyCat.png';
import smallcard from '../../img/smallcard.png';


export const NftCollectionCard = (props) => {
    return (
        <div className={css.collections}>
            <div className={css.top}>
                <div className={css.leftCorner}>
                    <div className={css.sort}>
                        <FilterButton 
                        text="Sale Type"
                        imagePath={saleType}/>
                    </div>
                    <div className={css.sort}>
                        <FilterButton 
                        text="Price Range"
                        imagePath={priceRange}/>
                    </div>
                    <div className={css.sort}>
                        <FilterButton 
                        text="Attributes"
                        imagePath={attributes}/>
                    </div>
                </div>
                <div className={css.rightCorner}>
                    <FilterButton 
                    text="Sort By: Recently Added"
                    imagePath={sortBy}/>
                </div>
            </div>
            <div className={css.item}>
            <SmallCard 
            name="Cute Morning Cafe" 
            price="30.5" 
            currency="SOL" 
            author="Ben Colfex"
            imagePath={sillyCat}>
            </SmallCard>
            <SmallCard 
            name="Cute Morning Cafe" 
            price="30.5" 
            currency="SOL" 
            author="Ben Colfex"
            imagePath={sillyCat}>
            </SmallCard>
            <SmallCard 
            name="Cute Morning Cafe" 
            price="30.5" 
            currency="SOL" 
            author="Ben Colfex"
            imagePath={sillyCat}>
            </SmallCard>
            <SmallCard 
            name="Cute Morning Cafe" 
            price="30.5" 
            currency="SOL" 
            author="Ben Colfex"
            imagePath={sillyCat}>
            </SmallCard>
            <SmallCard 
            name="Cute Morning Cafe" 
            price="30.5" 
            currency="SOL" 
            author="Ben Colfex"
            imagePath={smallcard}>
            </SmallCard>
            <SmallCard 
            name="Cute Morning Cafe" 
            price="30.5" 
            currency="SOL" 
            author="Ben Colfex"
            imagePath={smallcard}>
            </SmallCard>
            <SmallCard 
            name="Cute Morning Cafe" 
            price="30.5" 
            currency="SOL" 
            author="Ben Colfex"
            imagePath={smallcard}>
            </SmallCard>
            <SmallCard 
            name="Cute Morning Cafe" 
            price="30.5" 
            currency="SOL" 
            author="Ben Colfex"
            imagePath={smallcard}>
            </SmallCard>
            </div>
        </div>
    )
}