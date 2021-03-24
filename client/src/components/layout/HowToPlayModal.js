import React from "react"
import { Modal } from "antd"

const HowToPlayModal = ({ modalVisible, handleCancel }) => {

  return (
    <Modal
      title="How to Play"
      visible={modalVisible}
      onCancel={handleCancel}
      footer={null}
    >
      <div className="modal-container">
        <p><b>Goal of the game</b>: Uncover all the tiles on the board that don't have mines!</p>
        <p>1. Click anywhere on the board to start the game!</p>
        <p>2. The number on a tile indicate how many mines are adjacent to the particular tile</p>
        <p>3. The number on a tile indicate how many mines are adjacent to the particular tile</p>
      </div>

    </Modal>
  )
}

export default HowToPlayModal