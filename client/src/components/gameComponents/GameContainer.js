import React from "react";
import GameBoard from "./GameBoard";
import { Layout } from 'antd';

const { Header } = Layout;
import Grid from "../../gameLogic/Grid"

const GameContainer = () => {
  const grid = new Grid(8, 8, 9);
  return (
    <div>
      <Header></Header>
      <div className="game-container">
        I'm the game container! I have instructions and the board. And maybe the high score thing later.
        <GameBoard grid={grid} />
      </div>
    </div>
  );
};

export default GameContainer;