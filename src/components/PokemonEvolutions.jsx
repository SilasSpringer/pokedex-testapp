import React, { useEffect, useState} from "react";
import PokedexEntry from "./PokedexEntry";

export default function PokemonEvolutions(props){

	const [EvolutionChain, setEvolutionChain] = useState({});

	useEffect( ()=>{
        const getSpecies = async (pokemon_name) => {
            await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon_name}`)
            .then(res => {
				res.json()
                .then(data =>
					fetch(`${data.evolution_chain.url}`)
						.then(res => {
							res.json()
							.then(data => 
								setEvolutionChain(data))})
            		.catch(err=>console.log(err)))})
            .catch(err=>console.log(err));
        }
		if(props.pokemon_name !== undefined && props.pokemon_name !== 'undefined'){
        	getSpecies(props.pokemon_name);
			// console.log(props.pokemon_name, EvolutionChain)
		}
    }, [props.pokemon_name]);
	
	var evolutions = getEvolutions(EvolutionChain);
	if(evolutions.length > 0){
		return(
			<div className="Container Column BodyPadding PageWidth">
				<div className="Name">Evolutions</div>
				<div className="Container" style={{ width: '75vw' }}>
					{evolutions.map( (pokemon) => {
						var textsize = 24;
						// console.log(pokemon)
						return(
							<PokedexEntry pokemon={pokemon}  textsize={textsize} key={pokemon.id}/>
							)
						})}
				</div>
			</div>
		)
	}
}
function getEvolutions(json){
	var evolutions = [];
	if(json === undefined) return evolutions;
	var base_id = json.id;
	if(base_id === undefined || json.chain === undefined) return evolutions;

	evolutions = get_all(json.chain).reverse()
	return evolutions;
}

const get_all = (json) => {
	var rv = [];
	for (let [key, value] of Object.entries(json)) {
		switch (key){
			case "species":
				rv.push({'name' : value.name, 'id': getIdfromURL(value.url)})
				continue;
			case "evolves_to":
                if(value.length === 0) continue;
				rv.push(get_all(value[0]));
				continue;
			default:
				continue;
		}
	}
	return rv.flat();
}

const getIdfromURL = (url) => {
	let tmp = url.split("/");
	tmp.pop()
	return tmp.pop()
}