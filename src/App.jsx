import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokelist from "./pages/Pokelist";
import Pokemon from "./pages/Pokemon";
import "./styles/primary_style.css";
import Header from './components/Header';
import useSticky from './hooks/useSticky';
import logo from './logo.svg';
import './App.css';

function App() {
  const { isSticky, element } = useSticky()
  return (
    <BrowserRouter >
      <div ref={element} id="HEADER">
        <Header sticky={isSticky}/>
      </div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/pokemon/" element={<Pokelist/>}/>
        <Route path="pokemon/:name" element={<Pokemon/>}/>
        <Route path="/*" element={
          <div className='Container BodyPadding PageWidth' style={{'color': 'rgb(200,200,200)'}}>
            Sorry, we couldn't find that page. Please select a destination from the navbar.
          </div>}
        />
      </Routes>
    </BrowserRouter>
  );
}



class Homepage extends Component {
  render() {
    return (
      <div className="App" style={{ width: '100vw' }}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome! Select one of the apps from the navbar.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

// needa use pokeapi
// fetch list of pokemon
// display list of pokemon and make it clickable
// clicking on a pokemon redirects to a  page with info about said poke
//

export default App;