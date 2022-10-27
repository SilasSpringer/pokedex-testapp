import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import styles from "../styles/Pokelist.module.css"

export default function Pokelist() {
    const [Pokelist, setPokelist] = useState([]);

    useEffect( ()=>{
        const getPokelist = async () => {
            await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            .then(res => res.json()
                .then(data => 
                    setPokelist(data.results)))
            .catch(err=>console.log(err));
        }
        getPokelist();
        console.log(Pokelist);
    }, []);
    return(
        <div className={styles.Container}>
            {Pokelist.map((pokemon, index) => {
                // eslint-disable-next-line
                return(
                    <Link to={`/pokemon/${pokemon.name}`}>
                        <div className={styles.Item}>
                            {`${pokemon.name}`}
                        </div>
                    </Link>
                )
            })}
        </div>
        
    )
}