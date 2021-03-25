import React, { useState } from "react";
import GameTile from "./GameTile";
import Grid from "../../gameLogic/Grid";

const GameBoard = ({ startTimer, stopTimer, resetTimer, openWinNotification, openLossNotification }) => {
  const [firstClick, setFirstClick] = useState(true);
  const [grid, setGrid] = useState(new Grid(18, 14, 40));
  const [tilesData, setTilesData] = useState(grid.cells);
  const [interactable, setInteractable] = useState(true);
  const [paused, setPaused] = useState("Pause");

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
  };

  const endGame = (result) => {
    grid.uncoverAllMines();
    setTilesData(grid.cells);
    setInteractable(false);

    if (result === "loss") {
      stopTimer()
      openLossNotification(resetBoard, resetTimer);
    } else if (result === "win") {
      stopTimer()
      openWinNotification(resetBoard, resetTimer);
    }
  };

  const checkForWin = () => {
    const uncoveredCount = tilesData.filter((cell) => cell.uncovered).length;
    if (uncoveredCount === tilesData.length - grid.mineCount) {
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
      stopTimer()
      setInteractable(false)
      setPaused("Play")
    } else if (paused === "Play") {
      startTimer()
      setInteractable(true)
      setPaused("Pause")
    }
  }

  return (
    <div>
      <button className="new-game-button" type="button" onClick={resetBoard}>New Game</button>
      <div className="game-board">
        {tiles}
      </div>
    </div>
  );
};

export default GameBoard;
