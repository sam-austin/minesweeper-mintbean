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
        <p><b>Your Goal</b>: Locate all the mines without setting them off.</p>
        <p>1. Click anywhere on the board to start the game.</p>
        <p>2. The number on a tile indicates how many mines are adjacent to that tile (diagonals included!)</p>
        <p>3. Use your skills of reasoning and elimination to uncover tiles and flag mines.</p>
        <p>4. Pause at any time.</p>
        <p>5. Flag all the mines to win!</p>

      </div>
    </Modal>
  )
}

export default HowToPlayModal;
