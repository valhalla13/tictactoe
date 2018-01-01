import React, { Component } from 'react';
import './Game.css';

class Game extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          Game Board
        </div>
        <div className="game-info">
          Game Info
        </div>
      </div>
    );
  }
}

export default Game;
