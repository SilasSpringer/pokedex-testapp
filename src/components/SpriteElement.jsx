import "../styles/primary_style.css"
import logo from "../logo.svg"

export default function SpriteElement(props){
    var Poke = props.pokemonEntry;
    var sprite = props.sprite;
    if (sprite === undefined || sprite === 'undefined'){
        if(Poke.id !== undefined && Poke.id !== 'undefined'){
            sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Poke.id}.png`
        }
    }
    if(sprite !== undefined && sprite !== 'undefined' && Poke.name !== undefined && Poke.name !== 'undefined'){
        return (
            <div className="SpriteWindow">
                <img className="Sprite" src={sprite} alt={`${Poke.name}`.toUpperCase()}/>
            </div>
        )
    }
}

export function getValidSprite(pokemon_entry){
    if(pokemon_entry === undefined || pokemon_entry.sprites === undefined){
    }else if(pokemon_entry.sprites.front_default === null){
        for (const [, value] of Object.entries(pokemon_entry.sprites)){
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