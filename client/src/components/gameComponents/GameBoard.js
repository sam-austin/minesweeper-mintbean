import React, { useState } from "react";
import GameTile from "./GameTile";
import Grid from "../../gameLogic/Grid";

const GameBoard = ({startTimer}) => {
  const [firstClick, setFirstClick] = useState(true);
  const [grid, setGrid] = useState(new Grid(9, 9, 10));
  const [tilesData, setTilesData] = useState(grid.cells);

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
  };

  const tiles = tilesData.map((cell, index) => {
    return (
      <GameTile
        key={index}
        row={cell.row}
        column={cell.column}
        value={cell.value}
        startGame={startGame}
        cell={cell}
        chainUncover={chainUncoverWrapper}
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
