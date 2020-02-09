import React from "react";


class GameInterface extends React.Component{
    getContent = (status) => {
        return status === 'not_started' ? 'Play!' : 'Restart';
    }

    render() {
        return(
            <div id="game-interface">
                <button
                    onClick={this.props.resetGame}
                >{this.getContent(this.props.status)}</button>
            </div>
        );
    }
}

export default GameInterface;
