import './App.css';
import { SmallCard } from './components/SmallCard/small-card.jsx';
import { HomePage } from './components/Home page/Home-page.jsx';
import { TopCollectionsBlock } from './components/TopCollectionsBlock/Top-collections-block.jsx';
import { Footer } from './components/Footer/footer.jsx';
import {BigCard} from './components/BigCard/big-card.jsx';
import smallcard from './img/smallcard.png';
import bigcard from './img/bigcard.png';
import owner from './img/owner.png';
import creator from './img/creator.png';



function App() {
  return (
    <div className="App">
        <HomePage></HomePage>
        <TopCollectionsBlock>
        </TopCollectionsBlock>
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
      <Footer/>
    </div>
  );
}

export default App;
