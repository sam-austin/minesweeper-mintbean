import React, {useState} from "react";

const GameTile = ({row, column, value, placeMines}) => {
  const [uncover, setUncover] = useState(false);
  const tileClickHandler = () => {
    placeMines({row, column});
    setUncover(true);
  };

  let cursorStyles;
  if (!uncover) {
    cursorStyles = {cursor: "pointer"};
  }

return (
    <div 
      className="game-tile" 
      style={cursorStyles} 
      onClick = {tileClickHandler}>
      {!uncover || value}
    </div>
  )
}

export default GameTile;