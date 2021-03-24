import React, { useState } from "react";


const GameTile = ({ row, column, value, startGame, determineResult, cell, chainUncover, playState, updateEmptyTileClickCount }) => {
  const [uncover, setUncover] = useState(false);

  const tileClickHandler = () => {
    if (playState === "playing") {
      startGame({ row, column });
      setUncover(true);
      if (cell.value === 0) {
        chainUncover(cell);
        updateEmptyTileClickCount()
      } else {
        cell.uncover();
      }
    }
  };

  if (cell.uncovered && !uncover) {
    setUncover(true);
  }

  const colorArray = ["blue", "green", "red", "purple", "maroon", "turquoise", "black", "grey"];
  const determineValueStyles = (val) => ({ color: colorArray[val - 1], backgroundColor: "white"});

  let valueClass;
  let styles;
  let icon = value;

  if (!uncover && playState === "playing") {
    styles = { cursor: "pointer" };
  }

  if (uncover) {
    styles = determineValueStyles(value);
    switch (value) {
      case 0: valueClass = "empty";
        icon = "";
        break;
      case "*": valueClass = "bomb";
        icon = <img src="https://mine-sweeper-s3.s3.amazonaws.com/mine.svg" alt="bomb" />;
        break;
      case "flag": valueClass = "flag";
        icon = <img src="https://mine-sweeper-s3.s3.amazonaws.com/flags.svg" alt="flag" />;
        break;
      default: valueClass = "number";
    }
    determineResult(value);
  }

  return (
    <div
      className={`game-tile text-center ${valueClass}`}
      style={styles}
      onClick={tileClickHandler}
    >
      {!uncover || icon}
    </div>
  );
};

export default GameTile;
