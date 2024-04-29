
import Navbar from "./components/navbar";
import Intro from "./components/intro";
import Card from "./components/card"
import GitHubCommits from './components/github';
import About from './components/about';
import emptyImg from './empty.png';


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
            title="Placeholder1"
            description="This is a placeholder for future project"
          />
          <Card
            imgSrc={emptyImg}
            imgAlt="empty"
            title="Placeholder2"
            description="This is a placeholder for future project"
          />
          <Card
            imgSrc={emptyImg}
            imgAlt="empty"
            title="Placeholder3"
            description="This is a placeholder for future project"
          />
           
        </div>
      </div>
      <GitHubCommits username="Dasar0410" />
      <About/>
    </div>
  );
}

export default App;
