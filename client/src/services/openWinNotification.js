import React from "react"
import { Button, notification } from 'antd';


const openWinNotification = (resetBoard) => {
  const key = `open${Date.now()}`;
  const btn = (
    <Button type="primary" size="small" onClick={() => notification.close(key)}>
      Play Again?
    </Button>
  );
  notification.open({
    message: 'Good work!',
    description:
      'You defused all the mines.',
    btn,
    key,
    onClose: close,
  });
};


export default openWinNotification