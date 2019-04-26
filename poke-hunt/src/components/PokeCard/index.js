import React from "react";
import "./style.css"; 

function PokeCard(props){
    return (
        <div className="card">
            <div className="img-container">
                <img src={props.image} alt='Pokemon' />
            </div>
        </div>
    );
};

export default PokeCard;