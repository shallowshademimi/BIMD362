import React from "react";

class GameCell extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            disable: false,//able to move
            content: '?'
        }
    }

    componentDidUpdate(prevProps) {
        // set restart, Typical usage (don't forget to compare props):
        if (prevProps.status !== 'not_started' && this.props.status === "not_started") {
            this.setState({
                disable: false,
                content: '?'
            });
        }
    }

    //handleClick = function(){},can be clicked
    handleClick = () => {
        //if board can move, game is not end, the cell can be clicked
        if (!this.state.disable && this.props.status !== 'end') {
            //find current player
            let player = this.props.currentPlayer;
            //To update the value in the state
            this.setState({
                disable: true,
                content: player
            });
            this.props.handleSelect(this.props.coords, player);
        }
    }

    render() {
        return(
            <div className="game-cell"
                 onClick={this.handleClick}>
                //onClick detects if the div tag has been clicked, and when it’s clicked,
                //it will run the function “handleClick”
                {this.state.content}
            </div>
        );
    }
}

export default GameCell;