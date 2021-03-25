import React from "react";
import { Button, notification, Icon } from "antd";

const openLossNotification = (resetBoard, resetTimer) => {
  const key = `open${Date.now()}`;
  const btn = (
    <Button type="primary" size="small" onClick={() => {
      resetBoard()
      resetTimer()
      notification.close(key)
    }}
    >
      Play Again?
    </Button>
  );
  notification.open({
    message: "Too bad!",
    description:
      'Better luck next time.',
    btn,
    key,
    onClose: close,
    duration: null
  });
};

export default openLossNotification;
