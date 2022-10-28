import React, { useEffect, useState} from "react";
import PokedexEntry from "./PokedexEntry";

export default function PokemonEvolutions(props){
	var pokemon_name = `${props.pokemon_name}`;
	const [Species, setSpecies] = useState({});
	const [EvolutionChain, setEvolutionChain] = useState({});

    useEffect( ()=>{
        const getSpecies = async () => {
            await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon_name}`)
            .then(res => {
                res.json()
                .then(data => 
                    setSpecies(data))})
            .catch(err=>console.log(err));
        }
        getSpecies();
    }, []);

	var evochainurl;
	if(Species === undefined || Species.evolution_chain === undefined || Species.evolution_chain.url === undefined){
		evochainurl = `https://pokeapi.co/api/v2/pokemon/${pokemon_name}`;
	}else{
		evochainurl = Species.evolution_chain.url;
	}

	console.log(evochainurl);

	useEffect( ()=>{
        const getEvolutionChain = async () => {
            await fetch(`${evochainurl}`)
            .then(res => {
                res.json()
                .then(data => 
                    setEvolutionChain(data.chain))})
            .catch(err=>console.log(err));
        }
        getEvolutionChain();
    }, []);
	
	var evolutions = [];
	
	if(EvolutionChain !== undefined && EvolutionChain.species !== undefined){
		evolutions.push({
			'name': EvolutionChain.species.name, 
			'id': getIdFromUrl(EvolutionChain.species.url)
		});
		if(EvolutionChain.evolves_to !== undefined){
			evolutions.push({
				'name': EvolutionChain.evolves_to['0'].species.name, 
				'id': getIdFromUrl(EvolutionChain.evolves_to['0'].species.url)
			});
			if(EvolutionChain.evolves_to['0'].evolves_to !== undefined){
				evolutions.push({
					'name' : EvolutionChain.evolves_to['0'].evolves_to['0'].species.name,
					'id' : getIdFromUrl(EvolutionChain.evolves_to['0'].evolves_to['0'].species.url)
				})
			}
		}
	} else {
		evolutions.push(pokemon_name);
	}

	return(
		<div className="Container Column BodyPadding PageWidth">
                <div className="Name">Evolutions</div>
                <div className="Container" style={{ width: '75vw' }}>
                    {evolutions.map( (pokemon) => {
                        var textsize = 24;
						console.log(pokemon)
                        return(
                            <PokedexEntry pokemon={pokemon}  textsize={textsize} />
                        )
                    })}
                </div>
		</div>
	)
}

function getIdFromUrl(url){
	var tmp = url.split("/")
	tmp.pop(); //remove empty entry
	return tmp.pop();
}
