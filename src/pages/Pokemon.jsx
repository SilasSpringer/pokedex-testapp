import React, { useEffect, useState} from "react";
import styles from "../styles/Pokelist.module.css";
import { useParams } from "react-router-dom";
import logo from '../logo.svg';
export default function Pokemon() {
    const {name} = useParams();
    const [Poke, setPoke] = useState({});

    useEffect( ()=>{
        const getPoke = async () => {
            await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res => {
                console.log(res);
                res.json()
                .then(data => 
                    setPoke(data))})
            .catch(err=>console.log(err));
        }
        getPoke();
        console.log(`https://pokeapi.co/api/v2/pokemon/${name}`);
        console.log(Poke);
    }, []);

    return(
        <div className={styles.Item}>
            <body>
                <h1>{`${Poke.name}`}</h1>

                <img style={{ width: 200, height: 200 }} src={`${getValidSprite(Poke)}`} alt={`${Poke.name}`}/>
            </body>
        </div>
    )
}

function getValidSprite(pokemon_entry){
        if(pokemon_entry.sprites === undefined){
        }else if(pokemon_entry.sprites.front_default === null){
            for (const [_key, value] of Object.entries(pokemon_entry.sprites)){
                if(value === null){
                }else{
                    return value;
                }
            }
        }else{
            return pokemon_entry.sprites.front_default;
        }
        return "../logo.svg";
}