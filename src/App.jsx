import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Pokelist from "./pages/Pokelist";
import Pokemon from "./pages/Pokemon";
import useParams from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Link to="/pokemon/"><button>pokedex</button></Link>}/>
        <Route path="/pokemon/" element={<Pokelist/>}/>
        <Route path="pokemon/:name" element={<Pokemon/>}/>
      </Routes>
    </BrowserRouter>
  );
}


// needa use pokeapi
// fetch list of pokemon
// display list of pokemon and make it clickable
// clicking on a pokemon redirects to a  page with info about said poke
//

export default App;