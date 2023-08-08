import "./App.css";
// import Navbar from "./components/navbar/navbar";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";


function App(props) {
  return (
    <div className="app">
      <Header topic="React" />
      <div className="cardz">
        <Hero title="Card 1" />
        <Hero title="Card 2"  />
        <Hero title="Card 3" />
      </div>
    </div>
  );
}

export default App;
