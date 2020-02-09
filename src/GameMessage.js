import React from "react";

export default function GameMessage(props){
    return(
        <div id="game-message">
            {props.msg}
        </div>
    );
}
