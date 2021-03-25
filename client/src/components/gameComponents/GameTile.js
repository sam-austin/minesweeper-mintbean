import React from "react";

const GameTile = ({ startGame, cell, chainUncover, interactable, updateTileClickCount, endGame, checkForWin }) => {
  const tileClickHandler = () => {
    if (interactable) {
      startGame({ row: cell.row, column: cell.column });
      if (!cell.flagged) {
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
    }
  };

  const rightClickHandler = (event) => {
    event.preventDefault()
    if (interactable) {
      cell.flag();
      checkForWin();
      updateTileClickCount();
    }
  };

  const colorArray = ["#0050b3", "#237804", "#cf1322", "purple", "maroon", "turquoise", "black", "grey"];
  const determineValueStyles = (val) => ({ color: colorArray[val - 1], fontWeight: 500 });

  let styles;
  let valueClass;
  let icon = cell.value;

  if (!cell.uncovered && interactable) {
    styles = { cursor: "pointer" };
  }

  if (cell.uncovered) {
    styles = determineValueStyles(cell.value);
    switch (cell.value) {
      case 0: valueClass = "uncovered empty";
        icon = "";
        break;
      case "*": valueClass = "uncovered bomb";
        icon = <img src="https://mine-sweeper-s3.s3.amazonaws.com/mine.svg" alt="bomb" />;
        break;
      default: valueClass = "uncovered number";
    }
  } else if (cell.flagged) {
    valueClass = "flag";
    icon = <img src="https://mine-sweeper-s3.s3.amazonaws.com/flag-gray.svg" alt="flag" />;
  }

  return (
    <div
      className={`game-tile text-center ${valueClass}`}
      style={styles}
      onClick={tileClickHandler}
      onContextMenu={rightClickHandler}
    >
      {cell.uncovered || cell.flagged ? icon : null}
    </div>
  );
};

export default GameTile;
