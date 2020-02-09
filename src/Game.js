import React from 'react';
import GameTitle from "./GameTitle";
import GameMessage from "./GameMessage";
import GameInterface from "./GameInterface";
import GameCell from "./GameCell";

class Game extends React.Component {
    //constructor-initializes new object
    constructor(props) {
        //super
        super(props);
        //Initialize React component state
        //this.state=(board:[],player:o,gameState:GAME_STATE_MOVE,move:0); colon seems like equal sign.
        this.state = this.getInitialState();
    }

    resetGame = () => {
        this.setState(this.getInitialState());
    }

    handleSelect = (coords, player) => {
        let x = coords[0],
            y = coords[1],
            updatedBooard = this.state.board,
            updatedCellCount = this.state.availableCell - 1;
        updatedBooard[x][y] = player;
        this.setState({
            status: 'in_progress',
            board: updatedBooard,
            availableCell: updatedCellCount
        });
        // update winner
        let winner = this.hasWinner(x, y, player) ? player : null;
        if (winner) {
            this.setState({
                status: 'end',
                winner: winner
            });
        } else if (updatedCellCount === 0) {
            this.setState({
                status: 'end',
                winner: null
            });
        } else {
            this.setState({
                currentPlayer: this.nextPlayer()
            });
        }
    }

    nextPlayer = () => {
        return this.state.currentPlayer === 'X' ? 'O' : 'X';
        // if (this.state.currentPlayer === 'X') {
        //     return 'O';
        // } else {
        //     return 'X';
        // }
    }

    message = () => {
        if (this.state.status === 'end') {
            let msg = this.state.winner ? this.state.winner + ' won!' : 'Tie';
            return msg;
        } else {
            return this.state.currentPlayer + "'s turn";
        }
    }

    hasWinner = (x, y, player) => {
        let board = this.state.board,
            check = (curr) => curr === player;
        // row
        if (board[x].every(check)) return true;
        // col
        if (board.map(row => row[y]).every(check)) return true;
        // diag
        if (x === y && [0,1,2].map(i => board[i][i]).every(check)) return true;
        // anti-diag
        if (x + y === 2 && [0,1,2].map(i => board[i][2-i]).every(check)) return true;
        return false;
    }

    getInitialState = () => {
        return {
            currentPlayer: 'X',
            status: 'not_started',
            board: [
                ['', '', ''],
                ['', '', ''],
                ['', '', '']
            ],
            availableCell: 9,
            winner: null
        };
    }

    render() {
        return (
            <div id="game">
                <GameTitle/>
                <div className="game-board">
                    <div className="row">
                        <GameCell currentPlayer={this.state.currentPlayer} handleSelect={this.handleSelect} status={this.state.status} coords={[0,0]} />
                        <GameCell currentPlayer={this.state.currentPlayer} handleSelect={this.handleSelect} status={this.state.status} coords={[0,1]} />
                        <GameCell currentPlayer={this.state.currentPlayer} handleSelect={this.handleSelect} status={this.state.status} coords={[0,2]} />
                    </div>
                    <div className="row">
                        <GameCell currentPlayer={this.state.currentPlayer} handleSelect={this.handleSelect} status={this.state.status} coords={[1,0]} />
                        <GameCell currentPlayer={this.state.currentPlayer} handleSelect={this.handleSelect} status={this.state.status} coords={[1,1]} />
                        <GameCell currentPlayer={this.state.currentPlayer} handleSelect={this.handleSelect} status={this.state.status} coords={[1,2]} />
                    </div>
                    <div className="row">
                        <GameCell currentPlayer={this.state.currentPlayer} handleSelect={this.handleSelect} status={this.state.status} coords={[2,0]} />
                        <GameCell currentPlayer={this.state.currentPlayer} handleSelect={this.handleSelect} status={this.state.status} coords={[2,1]} />
                        <GameCell currentPlayer={this.state.currentPlayer} handleSelect={this.handleSelect} status={this.state.status} coords={[2,2]} />
                    </div>
                </div>
                
                <GameMessage msg={this.message()} />
                
                <GameInterface resetGame={this.resetGame} status={this.state.status} />
            
            </div>
        );
    }
}
    
export default Game;
