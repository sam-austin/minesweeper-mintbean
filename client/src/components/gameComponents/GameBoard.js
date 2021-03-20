import React from "react"
import GameTile from "./GameTile"

const GameBoard = (props) => {
  return <div>
    <GameTile />
    This is the gameboard, which contains a series of gametiles, iterated through and populated according to a set size. 
    </div>
}

export default GameBoard