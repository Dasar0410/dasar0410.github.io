import Navbar from "./components/navbar";
import Intro from "./components/intro";
import Card from "./components/card"
import GitHubCommits from './components/github';
import About from './components/about';
import cuisineImg from './components/img/sarjomaa_cuisine.png';
import portfolioImg from './components/img/sarjomaa_portfolio.png';
import pintrestImg from './components/img/pintrest.png';
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
            imgSrc={cuisineImg}
            imgAlt="empty"
            title="Sarjomaa Cuisine"
            description="This is a personal food blog where i share my favorite recipes. The website is built with React, TailwindCSS, Typescript and shadCN and uses Supabase for database and authentication."
            link="https://sarjomat.no"
          />
          <Card
            imgSrc={pintrestImg}
            imgAlt="empty"
            title="Pintrest"
            description="Pintrest (pronounced pint-rest) is a full-stack social media application where users can share their drinking experiences, interact with posts, and build a community around social drinking culture."
            link="https://pintrest.no"
          />

          <Card
            imgSrc={portfolioImg}
            imgAlt="empty"
            title="Sarjomaa"
            description="This portfolio website is made with React and TailwindCSS and is hosted on Github Pages"
            link="https://github.com/Dasar0410/dasar0410.github.io"
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
