import React, { useState, useEffect } from "react";
import Gradient from "javascript-color-gradient";

const GameTile = ({ row, column, value, startGame, cell, chainUncover, determineResult, playState }) => {
  const [uncover, setUncover] = useState(false);

  const colorGradient = new Gradient;
  const color1 = "#008000";
  const color2 = "#FF0000";
  colorGradient.setMidpoint(3)
  colorGradient.setGradient(color1, color2);
  const colorArray = colorGradient.getArray();

  const tileClickHandler = () => {
    if (playState === "playing") {
      startGame({ row, column });
      setUncover(true);
      if (cell.value === 0) {
        chainUncover(cell);
      } else {
        cell.uncover();
      }
    }
  };

  let valueClass;
  let valueStyles;
  let cursorStyles;

  const determineValueStyles = (val) => ({ color: colorArray[val - 1] });

  useEffect(() => {
    if (cell.uncovered) {
      setUncover(true);
    }
  }, [cell.uncovered]);

  if (!uncover && playState === "playing") {
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
    determineResult(value)
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
