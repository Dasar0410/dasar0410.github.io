
import Navbar from "./components/navbar";
import Intro from "./components/intro";
import Card from "./components/card"
import emptyImg from './empty.png'

//Legg til denne nettsiden som et prosjekt

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <div className="Projects-container">
        <p className="Projects-text">Projects</p>
        <div className='cards'>
          <Card
            imgSrc={emptyImg}
            imgAlt="empty"
            title="Sarjomaa"
            description="My webpage"
          />
          <Card
            imgSrc={emptyImg}
            imgAlt="empty"
            title="Placeholder"
            description="This is a placeholder for future project"
          />
          <Card
            imgSrc={emptyImg}
            imgAlt="empty"
            title="Placeholder"
            description="This is a placeholder for future project"
          />
          <Card
            imgSrc={emptyImg}
            imgAlt="empty"
            title="Placeholder"
            description="This is a placeholder for future project"
          />
        </div>
      </div>
      
    </div>
  );
}

export default App;
