import React, { useState } from "react";


const GameTile = ({ row, column, value, startGame, determineResult, cell, chainUncover, interactable, updateEmptyTileClickCount }) => {
  const [uncover, setUncover] = useState(false);

  const tileClickHandler = () => {
    if (interactable) {
      startGame({ row, column });
      setUncover(true);
      if (cell.value === 0) {
        chainUncover(cell);
      } else {
        cell.uncover();
      }
      determineResult(value)
      updateEmptyTileClickCount()
    }
  };

  if (cell.uncovered && !uncover) {
    setUncover(true);
  }

  const colorArray = ["blue", "green", "red", "purple", "maroon", "turquoise", "black", "grey"];
  const determineValueStyles = (val) => ({ color: colorArray[val - 1] });

  let valueClass;
  let valueStyles;
  let cursorStyles;

  if (!uncover && interactable) {
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
