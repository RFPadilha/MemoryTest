import React from "react";
import internalLogic from "./internalLogic";

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <internalLogic endGame={this.props.endGame} />
      </div>
    );
  }
}

export default Game;