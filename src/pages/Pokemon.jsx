import React, { useEffect, useState} from "react";
import "../styles/primary_style.css";
import styles2 from "../styles/Pokemon.module.css"
import { useParams } from "react-router-dom";
import PokedexButton from '../components/PokedexButton';
import SpriteElement from "../components/SpriteElement";
import TypeList from "../components/TypeList";
import { StatListArray } from "../components/StatList";
import StatList from "../components/StatList";
import PokemonEvolutions from "../components/PokemonEvolutions";




export default function Pokemon() {
    const {name} = useParams();
    const [Poke, setPoke] = useState({});

    useEffect( ()=>{
        const getPoke = async () => {
            await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res => {
                res.json()
                .then(data => 
                    setPoke(data))})
            .catch(err=>console.log(err));
        }
        getPoke();
    }, []);

    return(
        <div className="Container JustifyCenter Column BodyPadding PageWidth">
            <PokedexButton text="Back to Pokédex" /> 
            <button className={`${styles2.Name}`}>
                {`${Poke.name}`.toUpperCase()}
            </button>
            <div className="Container" style={{ width: '75vw', flex: '1 1 auto', flexWrap: 'wrap'}}>
                <div style={{width: '15vw', 'min-width': 'var(--Pokemon-min-width)'}}>
                    <StatList stats={Poke.stats}/>
                </div>
                <div className="Container" style={{width: '25vw', 'min-width': 'var(--Pokemon-min-width)'}}>
                    <SpriteElement pokemonEntry={Poke} />
                </div>
                <div className="Column" style={{width: '15vw', 'min-width': 'var(--Pokemon-min-width)'}}>
                    <TypeList types={Poke.types}/>
                    <div className="StatListHalf">
                        <StatListArray height={Poke.height} weight={Poke.weight} />
                    </div>
                </div>
            </div>
            <PokemonEvolutions pokemon_name={`${Poke.name}`}/>
            <PokedexButton text="Back to Pokédex" />
        </div>
    )
}

