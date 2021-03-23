import React, { useState } from "react"
import GameTile from "./GameTile"


const GameBoard = ({ grid }) => {
  const [firstClick, setFirstClick] = useState(true);
  const [playState, setPlayState] = useState("playing")
  const [tilesData, setTilesData] = useState(grid.cells);

  const determineResult = (value) => {
    if (value === "*") {
      setPlayState("lose")
    }
    const uncoveredTotal = tilesData.filter(cell => cell.uncovered).length
    if (uncoveredTotal === tilesData.length - 9) {
      setPlayState("win")
    }
  }

  const handleTileClick = (row, column) => {
    grid.uncoverClickedCell(row, column)
    if (firstClick) {
      startGame({ row, column })
    }
    setTilesData(grid.cells)
  }

  if (playState === "win" || playState === "lose") {
    grid.uncoverAllCells()
    setTilesData(grid.cells)
  }

  const startGame = (cell) => {
    grid.setMines(cell);
    grid.setProximityNumbers();
    if (firstClick) setFirstClick(false);
  };

  const tiles = tilesData.map((cell, index) => {
    return (
      <GameTile
        key={index}
        row={cell.row}
        column={cell.column}
        value={cell.value}
        uncovered={cell.uncovered}
        playState={playState}
        determineResult={determineResult}
        handleTileClick={handleTileClick}
      />
    )
  });

  return (
    <div className="game-board">
      {tiles}
    </div>
  )
}

export default GameBoard