import React, { useState } from "react";
import GameTile from "./GameTile";
import Grid from "../../gameLogic/Grid";

const GameBoard = ({ startTimer }) => {
  const [firstClick, setFirstClick] = useState(true);
  const [grid, setGrid] = useState(new Grid(18, 14, 40));
  const [tilesData, setTilesData] = useState(grid.cells);
  const [playState, setPlayState] = useState("playing")

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

  const determineResult = (value) => {
    if (value === "*") {
      setPlayState("lose")
    }
    const uncoveredTotal = tilesData.filter(cell => cell.uncovered).length
    if (uncoveredTotal === tilesData.length - 3 && playState !== "win") {
      setPlayState("win")
    }
  }

  if (playState === "win") {
    const uncoveredTotal = tilesData.filter(cell => cell.uncovered).length
    if (uncoveredTotal !== grid.cells.length) {
      grid.uncoverAllCells()
      setTilesData(grid.cells)
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
        playState={playState}
      />
    )
  });

  return (
    <div className="game-board">
      {tiles}
    </div>
  );
};

export default GameBoard;
