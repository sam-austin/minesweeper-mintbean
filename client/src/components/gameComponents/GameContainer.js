import React from "react";
import GameBoard from "./GameBoard";
import { Layout } from 'antd';

const { Header } = Layout;

const GameContainer = () => {
  return (
    <div>
      <Header></Header>
      <div className="game-container">
        I'm the game container! I have instructions and the board. And maybe the high score thing later. 
        <GameBoard /> 
      </div>
    </div>
  );
};

export default GameContainer;