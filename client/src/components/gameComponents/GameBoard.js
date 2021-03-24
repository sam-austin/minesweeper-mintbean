import React, { useState } from "react";
import GameTile from "./GameTile";
import Grid from "../../gameLogic/Grid";

const GameBoard = ({ startTimer }) => {
  const [firstClick, setFirstClick] = useState(true);
  const [grid, setGrid] = useState(new Grid(18, 14, 40));
  const [tilesData, setTilesData] = useState(grid.cells);
  const [playState, setPlayState] = useState(true)
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

  const uncoveredCount = tilesData.filter(cell => cell.uncovered).length

  const determineResult = (value) => {
    if (value === "*") {
      setPlayState(false)
      grid.uncoverAllMines()
      setTilesData(grid.cells)
    }
    if (uncoveredCount === tilesData.length - 3 && playState) {
      setPlayState(false)
      grid.uncoverAllMines()
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
        updateEmptyTileClickCount={updateEmptyTileClickCount}
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
