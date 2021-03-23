import React, { useState } from "react";

const GameTile = ({ row, column, value, placeMines }) => {
  const [uncover, setUncover] = useState(false);

  const tileClickHandler = () => {
    placeMines({ row, column });
    setUncover(true);
  };
  let valueStyles;
  let cursorStyles;
  let valueClass;

  const determineValueStyles = (value) => {
    switch (value) {
      case 1: return { color: "blue" }
      case 2: return { color: "green" }
      case 3: return { color: "red" }
    }
  }

  if (!uncover) {
    cursorStyles = { cursor: "pointer" };
  }

  if (uncover) {
    valueStyles = determineValueStyles(value)
    if (!value) valueClass = "empty"
    else if (value === "*") valueClass = "bomb"
  }



  return (
    <div
      className={`game-tile ${valueClass}`}
      style={cursorStyles}
      onClick={tileClickHandler} >
      <div className="tile-display" style={valueStyles}>
        {!uncover || value}
      </div>
    </div >
  )
}

export default GameTile;