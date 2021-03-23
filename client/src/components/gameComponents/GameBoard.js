import React, {useState} from "react"
import GameTile from "./GameTile"
import Grid from "../../gameLogic/Grid"

const GameBoard = (props) => {
  const [firstClick, setFirstClick] = useState(true);
  const grid = new Grid(4, 4, 3);
  const [tilesData, setTilesData] = useState(grid.cells);

  const placeMines = (cell) => {
    if (firstClick) {
      grid.setMines(cell);
      grid.setProximityNumbers();
      setTilesData(grid.cells);
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
        placeMines={placeMines}
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