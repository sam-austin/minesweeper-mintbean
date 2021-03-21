import React from "react"
import GameBoard from "./GameBoard"
import { Layout } from 'antd';
const { Header } = Layout;

const GameContainer = (props) => {
return (
  <div>
    <Header></Header>

    <GameBoard /> 
    I'm the game container! I have instructions and the board. And maybe the high score thing later. 
  </div>
)
}

export default GameContainer