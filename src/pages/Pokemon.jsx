import React, { useEffect, useState} from "react";
import styles from "../styles/primary_style.css";
import styles2 from "../styles/Pokemon.module.css"
import { useParams, Link } from "react-router-dom";
import PokedexButton from '../components/PokedexButton';
import SpriteElement from "../components/SpriteElement";
import TypeList from "../components/TypeList";



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
            <div className="Container">
                <TypeList types={Poke.types}/>
                <SpriteElement pokemonEntry={Poke} />
                <TypeList types={Poke.types}/>
            </div>
            <PokedexButton text="Back to Pokédex" />
        </div>
    )
}

