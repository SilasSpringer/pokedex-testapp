import { Link } from "react-router-dom";
import NavButton from "./NavButton";
export default function PokedexButton(props){
    var text = props.text;
    if(text === undefined){
        text = "Pokédex";
    }
    return(
        <NavButton text={text} to="/pokemon"/>
    )
  }