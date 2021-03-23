import React from "react";
import Gradient from "javascript-color-gradient"

const GameTile = ({ row, column, value, uncovered, handleTileClick, determineResult }) => {

  const colorGradient = new Gradient;
  const color1 = "#008000";
  const color2 = "#FF0000";
  colorGradient.setMidpoint(3)
  colorGradient.setGradient(color1, color2);
  const colorArray = colorGradient.getArray();

  let valueClass;
  let valueStyles;
  let cursorStyles;

  const onTileClick = () => {
    handleTileClick(row, column)
  }

  const determineValueStyles = (value) => {
    return { color: colorArray[value - 1] }
  }

  if (!uncovered) {
    cursorStyles = { cursor: "pointer" };
  }

  if (uncovered) {
    valueStyles = determineValueStyles(value)
    switch (value) {
      case 0: valueClass = "empty"
        break;
      case "*": valueClass = "bomb"
        break;
      case "flag": valueClass = "flag"
        break;
      default: valueClass = "number"
    }
    determineResult(value)
  }



  return (
    <div
      className={`game-tile ${valueClass}`}
      style={cursorStyles}
      onClick={onTileClick}
    >
      <div className="tile-display" style={valueStyles}>
        {!uncovered || value}
      </div>
    </div>
  )
}

export default GameTile;