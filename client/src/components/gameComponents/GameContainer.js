import React, { useState } from "react";
import GameBoard from "./GameBoard";
import { Layout } from "antd";
import HowToPlayModal from "../layout/HowToPlayModal"
const { Header } = Layout;

const GameContainer = () => {
  const [started, setStarted] = useState(false);
  const [reset, setReset] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const startTimer = () => {
    setStarted(true);
    setReset(false);
  };

  const stopTimer = () => {
    setStarted(false);
  };

  const resetTimer = () => {
    setReset(true);
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <Header></Header>
      <div className="game-container grid-container">
        <GameBoard startTimer={startTimer} stopTimer={stopTimer} resetTimer={resetTimer} started={started} showModal={showModal} reset={reset}
        />
        <HowToPlayModal modalVisible={modalVisible} handleCancel={handleCancel} />
      </div>
    </div>
  );
};

export default GameContainer;
