import React from "react";
import  css from './Top-collections-block.module.css';
import collectioncard from '../../img/collection.png';
import creator from '../../img/creator.png';
import { TopCollectionsCard } from '../TopCollectionsCard/Top-collections-card.jsx';


export const TopCollectionsBlock = (props) => {
    return (
        
        <div className={css.collections}>
            <h2>Top Collections over <span>last 7 days</span></h2>
            <div className={css.collectionGrid}>
            <TopCollectionsCard
                name="Cute Morning Cafe" 
                price="30.5" 
                currency="SOL" 
                imagePath={collectioncard}
                creatorIcon={creator}
                number="1488 items">
                </TopCollectionsCard>
                <TopCollectionsCard
                name="Cute Morning Cafe" 
                price="30.5" 
                currency="SOL" 
                imagePath={collectioncard}
                creatorIcon={creator}
                number="1488 items">
                </TopCollectionsCard>
                <TopCollectionsCard
                name="Cute Morning Cafe" 
                price="30.5" 
                currency="SOL" 
                imagePath={collectioncard}
                creatorIcon={creator}
                number="1488 items">
                </TopCollectionsCard>
                <TopCollectionsCard
                name="Cute Morning Cafe" 
                price="30.5" 
                currency="SOL" 
                imagePath={collectioncard}
                creatorIcon={creator}
                number="1488 items">
                </TopCollectionsCard>
                <TopCollectionsCard
                name="Cute Morning Cafe" 
                price="30.5" 
                currency="SOL" 
                imagePath={collectioncard}
                creatorIcon={creator}
                number="1488 items">
                </TopCollectionsCard>
                <TopCollectionsCard
                name="Cute Morning Cafe" 
                price="30.5" 
                currency="SOL" 
                imagePath={collectioncard}
                creatorIcon={creator}
                number="1488 items">
                </TopCollectionsCard>
                <TopCollectionsCard
                name="Cute Morning Cafe" 
                price="30.5" 
                currency="SOL" 
                imagePath={collectioncard}
                creatorIcon={creator}
                number="1488 items">
                </TopCollectionsCard>
                <TopCollectionsCard
                name="Cute Morning Cafe" 
                price="30.5" 
                currency="SOL" 
                imagePath={collectioncard}
                creatorIcon={creator}
                number="1488 items">
                </TopCollectionsCard>
            </div>
        </div>
        
    )
}