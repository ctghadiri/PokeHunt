import React from "react";
import "./style.css";

function PokeCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img src={props.image} alt={props.name} />
            </div>
            <span onClick={() => props.catchPokemon(props.id)} className="catch">
                𝘅
            </span>
        </div>
    );
};

export default PokeCard;