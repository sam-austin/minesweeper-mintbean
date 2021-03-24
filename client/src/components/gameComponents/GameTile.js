import React, { useState } from "react";


const GameTile = ({ row, column, value, startGame, determineResult, cell, chainUncover, playState, updateEmptyTileClickCount }) => {

  const tileClickHandler = () => {
    if (playState === "playing") {
      startGame({ row, column });
      if (cell.value === 0) {
        chainUncover(cell);
      } else {
        cell.uncover();
      }
      determineResult(value)
      updateEmptyTileClickCount()
    }
  };

  const colorArray = ["blue", "green", "red", "purple", "maroon", "turquoise", "black", "grey"];
  const determineValueStyles = (val) => ({ color: colorArray[val - 1] });

  let valueClass;
  let valueStyles;
  let cursorStyles;

  if (!cell.uncovered && playState === "playing") {
    cursorStyles = { cursor: "pointer" };
  }

  if (cell.uncovered) {
    valueStyles = determineValueStyles(value);
    switch (value) {
      case 0: valueClass = "empty";
        break;
      case "*": valueClass = "bomb";
        break;
      case "flag": valueClass = "flag";
        break;
      default: valueClass = "number";
    }
  }

  return (
    <div
      className={`game-tile ${valueClass}`}
      style={cursorStyles}
      onClick={tileClickHandler}
    >
      <div className="tile-display" style={valueStyles}>
        {cell.uncovered? value : null}
      </div>
    </div>
  );
};

export default GameTile;
