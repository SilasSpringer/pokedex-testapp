import React from "react"
import "../styles/primary_style.css"
import PokedexButton from "./PokedexButton";
import NavButton from './NavButton';


const Header = ({ sticky }) => (
    <nav className={sticky ? "Header Header-sticky" : "Header"}>
        <NavButton/>
        <PokedexButton/>
    </nav>
)
export default Header;