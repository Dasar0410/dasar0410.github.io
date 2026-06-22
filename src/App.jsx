import Navbar from "./components/navbar";
import Intro from "./components/intro";
import Card from "./components/card"
import GitHubCommits from './components/github';
import About from './components/about';
import cuisineImg from './components/img/sarjomaa_cuisine.png';
import portfolioImg from './components/img/sarjomaa_portfolio.png';
import pintrestImg from './components/img/pintrest.png';
import beachbaneImg from './components/img/beachbane.png';
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
            imgSrc={beachbaneImg}
            imgAlt="beachbane.no homepage"
            title="Beachbane"
            description="Beachbane.no is a directory of beach volleyball courts in Norway, covering over 380 courts across 159 cities. Users can browse courts via both map and list views, with data crowdsourced as well as sourced from the Norwegian Volleyball Federation and platforms like Google Maps, then cleaned using AI. The site is built with Next.js and Supabase, and runs on Vercel."
            link="https://beachbane.no"
          />
        <Card
            imgSrc={cuisineImg}
            imgAlt="empty"
            title="SarjoMat"
            description="This is a personal food blog where i share my favorite recipes. The website is built with React, TailwindCSS, Typescript, shadcn and uses Supabase as a hosted DB and for auth."
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
