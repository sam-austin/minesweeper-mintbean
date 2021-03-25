import React, { useState } from "react";
import GameBoard from "./GameBoard";
import { Layout, Button } from "antd";
import Timer from "./Timer";
import HowToPlayModal from "../layout/HowToPlayModal"
import openWinNotification from "../../services/openWinNotification";
import openLossNotification from "../../services/openLossNotification"
const { Header } = Layout;


const GameContainer = () => {
  const [started, setStarted] = useState(false);
  const [reset, setReset] = useState(false);
  const [modalVisible, setModalVisible] = useState(false)

  const startTimer = () => {
    setStarted(true);
    setReset(false)
  };

  const stopTimer = () => {
    setStarted(false);
  }

  const resetTimer = () => {
    setReset(true)
  }

  const showModal = () => {
    setModalVisible(true);
  }

  const handleCancel = () => {
    setModalVisible(false);
  }

  return (
    <div>
      <Header></Header>
      <div className="game-container grid-container">
        <Timer started={started} reset={reset} />
        <GameBoard startTimer={startTimer} stopTimer={stopTimer} resetTimer={resetTimer} openWinNotification={openWinNotification} openLossNotification={openLossNotification} />
        <HowToPlayModal modalVisible={modalVisible} handleCancel={handleCancel} />
      </div>
      <button onClick={showModal}>Show Modal</button>
    </div>
  );
};

export default GameContainer;
