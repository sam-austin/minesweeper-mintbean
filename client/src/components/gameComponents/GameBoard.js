import React, { useState } from "react";
import GameTile from "./GameTile";
import Grid from "../../gameLogic/Grid";

const GameBoard = ({ startTimer, openWinNotification, openLossNotification }) => {
  const [firstClick, setFirstClick] = useState(true);
  const [grid, setGrid] = useState(new Grid(18, 14, 40));
  const [tilesData, setTilesData] = useState(grid.cells);
  const [playState, setPlayState] = useState("playing")

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
    const newGrid = new Grid(18, 14, 40);
    setGrid(newGrid);
    setPlayState("playing");
    setFirstClick(true);
    setTilesData(newGrid.cells);
  }

  const uncoveredCount = tilesData.filter(cell => cell.uncovered).length

  const determineResult = (value) => {
    if (value === "*") {
      grid.uncoverAllMines()
      setTilesData(grid.cells)
      setPlayState("loss")
    }
    if (uncoveredCount === tilesData.length - 40 && playState !== "win") {
      grid.uncoverAllMines()
      setTilesData(grid.cells)
      setPlayState("win")
    }
  }

  if (playState === "win") {
    openWinNotification(resetBoard)
  }

  if (playState === "loss") {
    openLossNotification(resetBoard)
  }

  const tiles = tilesData.map((cell, index) => {
    return (
      <GameTile
        key={index}
        startGame={startGame}
        cell={cell}
        determineResult={determineResult}
        chainUncover={chainUncoverWrapper}
        playState={playState}
        updateEmptyTileClickCount={updateEmptyTileClickCount}
      />
    )
  });

  return (
    <div className="game-board">
      {tiles}
      <button onClick={resetBoard}>Reset</button>
    </div>
  );
};

export default GameBoard;
