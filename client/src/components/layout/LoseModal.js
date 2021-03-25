import React from "react"
import { Modal, Button } from "antd"

const LoseModal = ({ modalVisible, handleCancel, resetBoard }) => {

  const resetModal = () => {
    resetBoard()
    handleCancel()
  }

  return (
    <Modal
      style={{ textAlign: "center" }}
      title="Better luck next time!"
      visible={modalVisible}
      onCancel={handleCancel}
      footer={[
        <Button key="again" type="primary" onClick={resetModal} style={{ backgroundColor: "#c1c526" }}>
          Play Again?
        </Button>,
      ]}
    >
      <div className="modal-container loss-background" />
    </Modal>
  )
}

export default LoseModal
