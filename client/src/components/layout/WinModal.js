import React from "react"
import { Modal, Button } from "antd"

const WinModal = ({ modalVisible, handleCancel }) => {

  const resetModal = () => {
    resetBoard()
    handleCancel()
  }

  return (
    <Modal
      title="Good work!"
      visible={modalVisible}
      onCancel={handleCancel}
      footer={[
        <Button key="again" type="primary" onClick={resetModal} style={{ backgroundColor: "#c1c526" }}>
          Play Again?
        </Button>,
      ]}
    >
      <div className="modal-container" />
    </Modal>
  )
}

export default WinModal
