import React from "react";

const GameTile = ({ startGame, cell, chainUncover, interactable, updateTileClickCount, endGame, checkForWin }) => {
  const tileClickHandler = () => {
    if (interactable) {
      startGame({ row: cell.row, column: cell.column });
      if (cell.value === 0) {
        chainUncover(cell);
      } else if (cell.value === "*") {
        endGame("loss");
      } else {
        cell.uncover();
        checkForWin();
      }
      updateTileClickCount();
    }
  };

  const colorArray = ["blue", "green", "red", "purple", "maroon", "turquoise", "black", "grey"];
  const determineValueStyles = (val) => ({ color: colorArray[val - 1], backgroundColor: "#afb51a", fontWeight: 500 });

  let valueClass;
  let styles;
  let icon = cell.value;

  if (!cell.uncovered && interactable) {
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
