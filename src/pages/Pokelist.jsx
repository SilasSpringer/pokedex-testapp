import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import SpriteElement from "../components/SpriteElement";
import "../styles/primary_style.css"
import PokedexEntry from "../components/PokedexEntry";

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
            <div className="Container Column BodyPadding PageWidth">
                <div className="Name">Pokédex</div>
                <div className="Container" style={{ width: '75vw' }}>
                    {Pokelist.map((pokemon, index) => {
                        var textsize = 24;
                        
                        return(
                            <PokedexEntry pokemon={pokemon} index={index} textsize={textsize} />
                        )
                    })}
                </div>
            </div>
        </main>
    )
}


function getTextWidth(text, font) {
    // re-use canvas object for better performance
    const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    const context = canvas.getContext("2d");
    context.font = font;
    const metrics = context.measureText(text);
    return metrics.width;
  }