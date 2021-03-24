import React, { useState, useEffect } from "react";
import Gradient from "javascript-color-gradient";

const GameTile = ({ row, column, value, startGame, cell, chainUncover, updateEmptyTileClickCount}) => {
  const [uncover, setUncover] = useState(false);
  
  const colorGradient = new Gradient;
  const color1 = "#008000";
  const color2 = "#FF0000";
  colorGradient.setMidpoint(3) //this will eventually be set to the mineCount, to have a number of different colors equal to the mines gradually moving from blue to red. 
  colorGradient.setGradient(color1, color2);
  const colorArray = colorGradient.getArray();

  const tileClickHandler = () => {
    startGame({ row, column });
    setUncover(true);

    if (cell.value === 0) {
      chainUncover(cell);
      updateEmptyTileClickCount();
    } else {
      cell.uncover();
    }
  };

  let valueStyles;
  let cursorStyles;
  let valueClass;

  const determineValueStyles = (val) => ({ color: colorArray[val - 1] });

  if (cell.uncovered && !uncover) {
    setUncover(true);
  }

  if (!uncover) {
    cursorStyles = { cursor: "pointer" };
  }

  if (uncover) {
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
        {!uncover || value}
      </div>
    </div>
  );
};

export default GameTile;
