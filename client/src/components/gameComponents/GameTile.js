import React from "react";

const GameTile = ({ startGame, determineResult, cell, chainUncover, playState, updateEmptyTileClickCount }) => {
  const tileClickHandler = () => {
    if (playState === "playing") {
      startGame({ row: cell.row, column: cell.column });
      if (cell.value === 0) {
        chainUncover(cell);
      } else {
        cell.uncover();
      }
      determineResult(cell.value);
      updateEmptyTileClickCount();
    }
  };

  const colorArray = ["blue", "green", "red", "purple", "maroon", "turquoise", "black", "grey"];
  const determineValueStyles = (val) => ({ color: colorArray[val - 1]});

  let valueClass;
  let styles;
  let icon = cell.value;

  if (!cell.uncovered && playState === "playing") {
    styles = { cursor: "pointer" };
  }

  if (cell.uncovered) {
    styles = determineValueStyles(cell.value);
    switch (cell.value) {
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
    determineResult(cell.value);
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
