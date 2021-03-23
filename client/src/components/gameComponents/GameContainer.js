import React, { useState } from "react";
import GameBoard from "./GameBoard";
import { Layout } from "antd";
import Timer from "./Timer";

const { Header } = Layout;

const GameContainer = () => {
  const [started, setStarted] = useState(false);
  const startTimer = () => {
    setStarted(true);
  };

  return (
    <div>
      <Header></Header>
      <div className="game-container grid-container">
        <Timer started={started}/>
        <GameBoard startTimer={startTimer} /> 
      </div>
    </div>
  );
};

export default GameContainer;
