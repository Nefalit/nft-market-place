import './App.css';
import { SmallCard } from './components/SmallCard/small-card.jsx';
import smallcard from './img/smallcard.png';


function App() {
  return (
    <div className="App">
      <div className='grid'>
        <SmallCard 
          name="Cute Morning Cafe" 
          price="30.5" 
          currency="SOL" 
          author="Ben Colfex"
          imagePath={smallcard}>
        </SmallCard>
      </div>
    </div>
  );
}

export default App;
