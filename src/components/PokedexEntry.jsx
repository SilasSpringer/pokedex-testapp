import { Link } from "react-router-dom";
import SpriteElement from "./SpriteElement";

export default function (props){
    var pokemon = props.pokemon;
    var id = pokemon.id;
    if(id === undefined){
        id = (props.index) + 1;
    }
    var textsize = props.textsize;
    if(textsize === undefined){
        textsize = 24;
    }
    // if(pokemon !== undefined && pokemon.name !== undefined && id !== undefined){
    return (
        <Link to={`/pokemon/${pokemon.name}`} className="Link">
        <button className="Container JustifyCenter Button PokedexEntry">
            <SpriteElement pokemonEntry={pokemon} sprite={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
            <h1 style={{ 'fontSize': `${textsize}px` }}>
                {`${pokemon.name}`.toUpperCase()}
            </h1>
        </button>
        </Link>
    )
    // }
}