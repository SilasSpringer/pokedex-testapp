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

export default function Pokemon(props) {
    var {name} = useParams();
    if (name === undefined){
        name = props.name;
    }
    const [Poke, setPoke] = useState({});

    useEffect( ()=>{
        const getPoke = async (name) => {
            await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res => {
                res.json()
                .then(data => 
                    setPoke(data))})
            .catch(err=>console.log(err));
        }
        if(name !== undefined){
            console.log("loading again");
            getPoke(name);
        }
    }, [name]);
    return(
        <div className="Container JustifyCenter Column BodyPadding PageWidth">
            <PokedexButton text="Back to Pokédex" /> 
            <button className={`${styles2.Name}`}>
                {`${Poke.name}`.toUpperCase()}
            </button>
            <div className="Container" style={{ width: '75vw', flex: '1 1 auto', flexWrap: 'wrap'}}>
                <div style={{minWidth: '15vw'}}>
                    <StatList stats={Poke.stats}/>
                </div>
                <div className="Container" style={{minWidth: '25vw'}}>
                    <SpriteElement pokemonEntry={Poke} />
                </div>
                <div className="Column" style={{minWidth: '15vw'}}>
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

