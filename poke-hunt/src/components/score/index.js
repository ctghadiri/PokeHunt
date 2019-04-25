import React from "react";
import "./style.css";

function Score (props){
    
    return(
        <div className="score">
            <p>Score : {props.score}</p>
        </div>
    )
};

export default Score;