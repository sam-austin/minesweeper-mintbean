import React from "react"
import { Button, notification, Icon } from 'antd';

const openLossNotification = (resetBoard) => {
  const key = `open${Date.now()}`;
  const btn = (
    <Button type="primary" size="small" onClick={() => resetBoard()}>
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


export default openLossNotification