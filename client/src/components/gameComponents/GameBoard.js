import React, { useState } from "react";
import GameTile from "./GameTile";
import Grid from "../../gameLogic/Grid";
import Timer from "./Timer";

const GameBoard = ({ startTimer, stopTimer, resetTimer, openWinNotification, openLossNotification, started, showModal }) => {
  const [firstClick, setFirstClick] = useState(true);
  const [grid, setGrid] = useState(new Grid(18, 14, 40));
  const [tilesData, setTilesData] = useState(grid.cells);
  const [interactable, setInteractable] = useState(true);
  const [paused, setPaused] = useState("Pause");

  // added to force a re-render of all tiles after each time the chainUncover function is called.
  const [tileClickCount, setTileClickCount] = useState(0);
  const updateTileClickCount = () => {
    setTileClickCount(tileClickCount + 1);
  };

  const chainUncoverWrapper = (cell) => {
    grid.chainUncover(cell);
    setTilesData(grid.cells);
  };

  const startGame = (cell) => {
    if (firstClick) {
      grid.setMines(cell);
      grid.setProximityNumbers();
      setTilesData(grid.cells);
      startTimer();
    }
    setFirstClick(false);
  };

  const resetBoard = () => {
    const newGrid = new Grid(18, 14, 40);
    setGrid(newGrid);
    setInteractable(true);
    setFirstClick(true);
    setTilesData(newGrid.cells);
    setPaused("Pause");
    resetTimer();
  };

  const endGame = (result) => {
    grid.uncoverAllMines();
    setTilesData(grid.cells);
    setInteractable(false);

    if (result === "loss") {
      stopTimer();
      openLossNotification(resetBoard, resetTimer);
    } else if (result === "win") {
      stopTimer();
      openWinNotification(resetBoard, resetTimer);
    }
  };

  const checkForWin = () => {
    const uncoveredCount = tilesData.filter((cell) => cell.uncovered).length;
    if (uncoveredCount === tilesData.length - grid.mineCount) {
      endGame("win");
    }
  };

  const tiles = tilesData.map((cell, index) => {
    return (
      <GameTile
        key={index}
        startGame={startGame}
        cell={cell}
        endGame={endGame}
        checkForWin={checkForWin}
        chainUncover={chainUncoverWrapper}
        interactable={interactable}
        updateTileClickCount={updateTileClickCount}
      />
    )
  });

  const pauseHandler = () => {
    if (interactable) {
      stopTimer();
      setInteractable(false);
      setPaused("Play");
    } else if (paused === "Play") {
      startTimer();
      setInteractable(true);
      setPaused("Pause");
    }
  };

  return (
    <div>
      <div className="game-info-container">
        <div className="get-started-button">
          <div className="rounded-button-extra button large" onClick={showModal}>
            Game Rules
          </div>
        </div>  
        <Timer started={started} />
        <div className="rounded-button-extra button large" onClick={resetBoard}>
          New Game
        </div>
      </div>
      <button className="new-game-button" type="button" onClick={pauseHandler}>{paused}</button>
      <div className="game-board">
        {tiles}
      </div>
    </div>
  );
};

export default GameBoard;
