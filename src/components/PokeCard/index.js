import React from "react";
import "./style.css";

function PokeCard(props) {
    return (
        <div className="card">
            <div className="img-container" onClick={() => props.catchPokemon(props.id)}>
                <img src={props.image} alt={props.name} />
            </div>
        </div>
    );
};

export default PokeCard;