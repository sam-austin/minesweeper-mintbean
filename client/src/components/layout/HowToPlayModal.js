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
        <p><b>Goal of the game</b>: Uncover all tiles on the board that don't have mines!</p>
        <p>1. Click any tile on the board to start the game!</p>
        <p>2. The number on a tile indicates the number of adjacent mines.</p>
        <p>3. Continue uncovering tiles without clicking one of the 40 hidden mines to win the game.</p>
      </div>
    </Modal>
  )
}

export default HowToPlayModal
