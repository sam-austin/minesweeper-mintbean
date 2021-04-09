import React, { useState } from "react";
import GameTile from "./GameTile";
import Grid from "../../gameLogic/Grid";
import Timer from "./Timer";
import LoseModal from "../layout/LoseModal"
import WinModal from "../layout/WinModal"

const GameBoard = ({ startTimer, stopTimer, resetTimer, started, showModal, reset }) => {
  const [firstClick, setFirstClick] = useState(true);
  const [grid, setGrid] = useState(new Grid(18, 14, 40));
  const [tilesData, setTilesData] = useState(grid.cells);
  const [interactable, setInteractable] = useState(true);
  const [paused, setPaused] = useState("Pause");

  const [lossModalVisible, setLossModalVisible] = useState(false);
  const [winModalVisible, setWinModalVisible] = useState(false);

  const showLossModal = () => {
    setLossModalVisible(true);
  };

  const handleLossCancel = () => {
    setLossModalVisible(false);
  };

  const showWinModal = () => {
    setWinModalVisible(true);
  };

  const handleWinCancel = () => {
    setWinModalVisible(false);
  };

  // added to force a re-render of all tiles after each time the chainUncover function is called.
  const [tileClickCount, setTileClickCount] = useState(0);
  const updateTileClickCount = () => {
    setTileClickCount(tileClickCount + 1);
  };

  const chainUncoverWrapper = (cell) => {
    grid.chainUncover(cell);
    setTilesData(grid.cells);
  };

  const startGame = (cell) => {
    if (firstClick) {
      grid.setMines(cell);
      grid.setProximityNumbers();
      setTilesData(grid.cells);
      startTimer();
    }
    setFirstClick(false);
  };

  const resetBoard = () => {
    const newGrid = new Grid(18, 14, 40);
    setGrid(newGrid);
    setInteractable(true);
    setFirstClick(true);
    setTilesData(newGrid.cells);
    setPaused("Pause");
    resetTimer();
  };

  const endGame = (result) => {
    grid.uncoverAllMines();
    setTilesData(grid.cells);
    setInteractable(false);

    if (result === "loss") {
      stopTimer();
      showLossModal()
    } else if (result === "win") {
      stopTimer();
      showWinModal()
    }
  };

  const checkForWin = () => {
    if (grid.determineWin()) {
      endGame("win");
    }
  };

  const tiles = tilesData.map((cell, index) => {
    return (
      <GameTile
        key={index}
        startGame={startGame}
        cell={cell}
        endGame={endGame}
        checkForWin={checkForWin}
        chainUncover={chainUncoverWrapper}
        interactable={interactable}
        updateTileClickCount={updateTileClickCount}
      />
    )
  });

  const pauseHandler = () => {
    if (interactable) {
      stopTimer();
      setInteractable(false);
      setPaused("Play");
    } else if (paused === "Play") {
      startTimer();
      setInteractable(true);
      setPaused("Pause");
    }
  };

  return (
    <div>
      <div className="game-info-container">
        <div className="get-started-button">
          <div className="rounded-button-extra button large" onClick={showModal}>
            Game Rules
          </div>
        </div>  
        <Timer started={started} reset={reset} />
        <div className="mine-counter">
          {grid.mineCount - grid.countFlaggedCells()}
        </div>
        <div className="rounded-button-extra button large" style={{ padding: "0.7em 1.742em" }} onClick={resetBoard}>
          New Game 
        </div>
      </div>
      <button 
        className="new-game-button" 
        type="button" 
        onClick={!firstClick ? pauseHandler : null}>
          {paused}
      </button>
      <div className="game-board">
        {tiles}
      </div>
      <LoseModal modalVisible={lossModalVisible} handleCancel={handleLossCancel} resetBoard={resetBoard} />
      <WinModal modalVisible={winModalVisible} handleCancel={handleWinCancel} resetBoard={resetBoard} />
    </div>
  );
};

export default GameBoard;
