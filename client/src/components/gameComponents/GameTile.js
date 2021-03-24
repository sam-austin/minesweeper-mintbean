import React, { useState } from "react";

const GameTile = ({ row, column, value, startGame, cell, chainUncover, updateEmptyTileClickCount}) => {
  const [uncover, setUncover] = useState(false);

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

  if (cell.uncovered && !uncover) {
    setUncover(true);
  }

  const colorArray = ["blue", "green", "red", "purple", "maroon", "turquoise", "black", "grey"];
  const determineValueStyles = (val) => ({ color: colorArray[val - 1] });
  let valueStyles;
  let cursorStyles;
  let valueClass;

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
