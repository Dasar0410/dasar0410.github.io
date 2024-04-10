
import Navbar from "./components/navbar";
import Intro from "./components/intro";
import Card from "./components/card"

//Legg til denne nettsiden som et prosjekt

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <h1>Projects</h1>
      <div className='cards'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
    </div>
  );
}

export default App;
