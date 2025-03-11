
import Navbar from "./components/navbar";
import Intro from "./components/intro";
import Card from "./components/card"
import GitHubCommits from './components/github';
import About from './components/about';
import emptyImg from './empty.png';
import studentweb from './studentweb.png';
import Technologies from "./components/technologies";
import './app.css'


//Legg til denne nettsiden som et prosjekt

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <section id="portfolio" className="Projects-container">
        <p className="Projects-text large-header">Projects</p>
        <div className='cards'>
          <Card
            imgSrc={emptyImg}
            imgAlt="empty"
            title="Sarjomaa"
            description="This portfolio website is made with React and TailwindCSS and is hosted on Github Pages"
            link="https://github.com/Dasar0410/dasar0410.github.io"
          />
          <Card
            imgSrc={studentweb}
            imgAlt="empty"
            title="StudentWeb Calendar Exporter"
            description="A Chrome extension that exports your exam dates from StudentWeb to .ics format to easily import them to your calendar"
            link="https://github.com/Dasar0410/Studentweb-kalender"
          />
          <Card
            imgSrc={emptyImg}
            imgAlt="empty"
            title="Sarjomaa-Cuisine (WIP)"
            description="This a food blog intended to remember my favourite recipes and to easily know what to cook"
            link="https://github.com/Dasar0410/sarjomaa-cuisine-frontend"
          />
           
        </div>
      </section>
      <section className="github-chart">
        <GitHubCommits username="Dasar0410" />
      </section>
      <Technologies/>
      <About/>
    </div>
  );
}

export default App;
