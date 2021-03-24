import React from "react";

const GameTile = ({ row, column, value, startGame, determineResult, cell, chainUncover, playState, updateEmptyTileClickCount }) => {
  const tileClickHandler = () => {
    if (playState === "playing") {
      startGame({ row, column });
      if (cell.value === 0) {
        chainUncover(cell);
      } else {
        cell.uncover();
      }
      determineResult(value);
      updateEmptyTileClickCount();
    }
  };

  const colorArray = ["blue", "green", "red", "purple", "maroon", "turquoise", "black", "grey"];
  const determineValueStyles = (val) => ({ color: colorArray[val - 1], backgroundColor: "white" });

  let valueClass;
  let styles;
  let icon = value;

  if (!cell.uncovered && playState === "playing") {
    styles = { cursor: "pointer" };
  }

  if (cell.uncovered) {
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
      {cell.uncovered ? icon : null}
    </div>
  );
};

export default GameTile;
