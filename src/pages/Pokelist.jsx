import React, { useEffect, useState } from "react"
import "../styles/primary_style.css"
import PokedexEntry from "../components/PokedexEntry";

export default function Pokelist() {
    const [Pokelist, setPokelist] = useState([]);

    useEffect( ()=>{
        const getPokelist = async () => {
            await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
            .then(res => res.json()
                .then(data => 
                    setPokelist(data.results)))
            .catch(err=>console.log(err));
        }
        getPokelist();
    }, []);
    if(Pokelist !== undefined){
        return(
            <main>
                <div className="Container Column BodyPadding PageWidth">
                    <div className="Name">Pokédex</div>
                    <div className="Container" style={{ width: '75vw' }}>
                        {Pokelist.map((pokemon, index) => {
                            var textsize = 24;
                            
                            return(
                                <PokedexEntry pokemon={pokemon} index={index} textsize={textsize} key={index}/>
                            )
                        })}
                    </div>
                </div>
            </main>
        )
    }
}