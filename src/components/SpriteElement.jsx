import "../styles/primary_style.css"
import logo from "../logo.svg"
import { useEffect, useState } from "react";
import Button from "@restart/ui/esm/Button";
import { childElements } from "dom-helpers";

export default function SpriteElement(props){
    var Poke = props.pokemonEntry;
    var sprite = props.sprite;
   
    var sprites = getValidSprites(Poke);
    // console.log(sprites)
    if (sprites.length === 0 && sprite !== undefined && sprite !== 'undefined') sprites = [sprite];
    else if (sprites.length === 0) sprites = [`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Poke.id}.png`];

    const [spriteindex, setSpriteIndex] = useState(Math.floor(sprites.length/2));
    if(sprites !== undefined && sprites !== 'undefined' && Poke.name !== undefined && Poke.name !== 'undefined'){
        // console.log(sprites, spriteindex);
        return (
            <div style={{display: "flex", alignItems: "center"}}>
                {sprites.length > 1 && <div className="CycleSprite" onClick={
                    ()=>{ if (spriteindex <= 0){
                        setSpriteIndex(sprites.length - 1);
                    }else{
                        setSpriteIndex((spriteindex - 1) % (sprites.length)); 
                    }
                }}><p>{"<"}</p></div>}
                <div className="SpriteWindow">
                    <img className={`${sprites.length > 1 ? "SpriteSpin" : "Sprite"}`} src={sprites[spriteindex]} alt={`${Poke.name}`.toUpperCase()}/>
                </div>
                {sprites.length > 1 && <div className="CycleSprite" onClick={
                    ()=>{ setSpriteIndex((spriteindex + 1) % (sprites.length)); 
                }}><p>{">"}</p></div>}
            </div>
        )
    }
}

export function getValidSprites(pokemon_entry){
    if(pokemon_entry === undefined || pokemon_entry.sprites === undefined){
    }else{
        let rv = [];
        for (const [, value] of Object.entries(pokemon_entry.sprites)){
            if(value === null){
            }else if (typeof value === 'string'){
                if (value === `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon_entry.id}.png`){
                    rv = [value].concat(rv)
                }else{
                    rv.push(value);
                }
            }else{
                rv.concat(getValidSprites(value));
            }
        }
        return rv;
    }
    return [];
}