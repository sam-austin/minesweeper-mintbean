import React, { useState } from "react";
import GameTile from "./GameTile";
import Grid from "../../gameLogic/Grid";

const GameBoard = ({ startTimer, stopTimer, openWinNotification, openLossNotification }) => {
  const [firstClick, setFirstClick] = useState(true);
  const [grid, setGrid] = useState(new Grid(18, 14, 40));
  const [tilesData, setTilesData] = useState(grid.cells);
  const [interactable, setInteractable] = useState(true);
  const [paused, setPaused] = useState("Pause");

  // added to force a re-render of all tiles after each time the chainUncover function is called.
  const [emptyTileClickCount, setEmptyTileClickCount] = useState(0);
  const updateEmptyTileClickCount = () => {
    setEmptyTileClickCount(emptyTileClickCount + 1);
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
  }

  const resetBoard = () => {
    const newGrid = new Grid(18, 14, 40)
    setInteractable(true)
    setTilesData(newGrid.cells)
  }

  const uncoveredCount = tilesData.filter(cell => cell.uncovered).length

  const determineResult = (value) => {
    if (value === "*") {
      grid.uncoverAllMines()
      setTilesData(grid.cells)
      setInteractable(false)
      stopTimer()
      openLossNotification(resetBoard)
    }
    if (uncoveredCount === tilesData.length - 40 && interactable) {
      grid.uncoverAllMines()
      setTilesData(grid.cells)
      setInteractable(false)
      stopTimer()
      openWinNotification(resetBoard)
    }
  }

  const tiles = tilesData.map((cell, index) => {
    return (
      <GameTile
        key={index}
        row={cell.row}
        column={cell.column}
        value={cell.value}
        startGame={startGame}
        cell={cell}
        determineResult={determineResult}
        chainUncover={chainUncoverWrapper}
        interactable={interactable}
        updateEmptyTileClickCount={updateEmptyTileClickCount}
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
    <div className="game-board">
      {tiles}
      <button onClick={pauseHandler}>{paused}</button>
    </div>
  );
};

export default GameBoard;
