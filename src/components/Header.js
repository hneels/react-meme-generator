import React from "react";
import troll from "../images/troll-face.svg"


function Header() {

    return (
        <header>

            <img src={troll} alt="troll"></img>
            <h3 className="title">Meme Generator</h3>

            <span className="course">React Course - Project 3</span>
        </header>
    )
}

export default Header;