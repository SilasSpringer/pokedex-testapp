import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import PokedexButton from "../components/PokedexButton";
import SpriteElement from "../components/SpriteElement";
import "../styles/primary_style.css"

export default function Pokelist() {
    const [Pokelist, setPokelist] = useState([]);

    useEffect( ()=>{
        const getPokelist = async () => {
            await fetch('https://pokeapi.co/api/v2/pokemon?limit=905&offset=0')
            .then(res => res.json()
                .then(data => 
                    setPokelist(data.results)))
            .catch(err=>console.log(err));
        }
        getPokelist();
    }, []);
    return(
        <main>
            <div className="Container BodyPadding PageWidth">
                <div className="Container">
                    {Pokelist.map((pokemon, index) => {
                        return(
                            <Link to={`/pokemon/${pokemon.name}`} className="Link">
                                <button className="Container JustifyCenter Button PokedexEntry">
                                    <SpriteElement pokemonEntry={pokemon} sprite={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`} />
                                    <h1 className="NoBottomSpacing">
                                        {`${pokemon.name}`.toUpperCase()}
                                    </h1>
                                    
                                </button>
                            </Link>
                        )
                    })}
                </div>
                <Link to="/" className="Link">
                    <button className="Button">
                        Back to Home
                    </button>
                </Link> 
            </div>
        </main>
    )
}
