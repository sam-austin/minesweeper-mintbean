import React from "react";

const GameTile = ({row, column, value}) => {
return <div>
    position:{row},{column} value:{value}
  </div>
}

export default GameTile;