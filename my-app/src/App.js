import './App.css';
import { SmallCard } from './components/SmallCard/small-card.jsx';
import { HomePage } from './components/Home page/home-page.jsx';
import { TopCollectionsBlock } from './components/TopCollectionsBlock/Top-collections-block.jsx';
import { Footer } from './components/Footer/footer.jsx';
import {BigCard} from './components/BigCard/big-card.jsx';
import smallcard from './img/smallcard.png';
import bigcard from './img/bigcard.png';
import owner from './img/owner.png';
import creator from './img/creator.png';
import {NftCollectionCard} from './components/NFTCollectionList/nft-collection-list.jsx';
import { FilterButton } from "./components/FilterButton/filter-button.jsx";
import saleType from './img/saleType.svg';
import priceRange from './img/priceRange.svg';
import category from './img/category.svg';
import sortBy from './img/sortBy.svg';



function App() {
  return (
    <div className="App">
        <HomePage></HomePage>
        <TopCollectionsBlock>
        </TopCollectionsBlock>
        <div className='discoverMore'>
          <h2><strong>Discove</strong>r more NFTs</h2>
          <div className='topFilter'>
            <div className='leftCorner'>
              <div className='sort'>
                  <FilterButton 
                  text="Category"
                  imagePath={category}/>
              </div>
              <div className='sort'>
                  <FilterButton 
                  text="Sale Type"
                  imagePath={saleType}/>
              </div>
              <div className='sort'>
                  <FilterButton 
                  text="Price Range"
                  imagePath={priceRange}/>
              </div>
            </div>
            <div className='rightCorner'>
                <FilterButton 
                text="Sort By: Recently Added"
                imagePath={sortBy}/>
            </div>
          </div>
          <div className='grid'>
            <BigCard
              name="Cute Good Morning Cafe NFTs" 
              price="30.5" 
              currency="SOL" 
              author="Good Morning Cats"
              imagePath={bigcard}
              ownerIcon={owner}
              ownerName="Zqf---3t"
              creatorIcon={creator}
              creatorName="Sami-4n">
            </BigCard>
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
      <NftCollectionCard/>
      <Footer/>
    </div>
  );
}

export default App;
