
import Navbar from "./components/navbar";
import Intro from "./components/intro";
import Card from "./components/card"
import GitHubCommits from './components/github';
import About from './components/about';
import emptyImg from './empty.png';
import studentweb from './studentweb.png';


//Legg til denne nettsiden som et prosjekt

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <section id="portfolio" className="Projects-container">
        <p className="Projects-text">Projects</p>
        <div className='cards'>
          <Card
            imgSrc={emptyImg}
            imgAlt="empty"
            title="Sarjomaa"
            description="This portfolio website is made with React and styled with normal CSS and Tailwind. It is intended to showcase my projects and skills"
          />
          <Card
            imgSrc={studentweb}
            imgAlt="empty"
            title="StudentWeb Calendar Exporter"
            description="This is a Chrome extension that exports your calendar from StudentWeb to Google Calendar or any other preferred calendar"
          />
          <Card
            imgSrc={emptyImg}
            imgAlt="empty"
            title="Sarjomaa-Cuisine (WIP)"
            description="This a food blog intended to remember my favourite recipes and to easily know what to cook"
          />
          <Card
            imgSrc={emptyImg}
            imgAlt="empty"
            title="To be continued"
            description="This is a placeholder for future project"
          />
           
        </div>
      </section>
      <GitHubCommits username="Dasar0410" />
      <About/>
    </div>
  );
}

export default App;
