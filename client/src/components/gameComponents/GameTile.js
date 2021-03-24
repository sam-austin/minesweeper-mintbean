import React, { useState, useEffect } from "react";

const GameTile = ({ row, column, value, startGame, cell, chainUncover }) => {
  const [uncover, setUncover] = useState(false);

  const colorArray = ["blue", "green", "red", "purple", "maroon", "turquoise", "black", "grey"];

  const tileClickHandler = () => {
    startGame({ row, column });
    setUncover(true);
    if (cell.value === 0) {
      console.log(cell)
      chainUncover(cell);
    } else {
      cell.uncover();
    }
  };

  let valueStyles;
  let cursorStyles;
  let valueClass;

  const determineValueStyles = (val) => ({ color: colorArray[val - 1] });

  useEffect(() => {
    if (cell.uncovered) {
      setUncover(true);
    }
  }, [cell.uncovered]);

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
