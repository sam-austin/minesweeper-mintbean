import React from "react"
import GameTile from "./GameTile"
import Grid from "../../gameLogic/Grid"

const GameBoard = (props) => {
  const grid = new Grid(4, 4, 3);
  grid.setMines({row: 2, column: 2})
  grid.setProximityNumbers()
  const tiles = grid.cells.map((cell, index) => {
    return (
      <GameTile 
        key={index}
        row={cell.row}
        column={cell.column}
        value={cell.value}
      />
    )
  })
  return <div>
    This is the gameboard, which contains a series of gametiles, iterated through and populated according to a set size. 
    {tiles}
    </div>
}

export default GameBoard