import React, { useRef, useState, useEffect } from "react";

const Timer = ({ started, reset }) => {
  const [num, setNum] = useState(0);
  const increaseNum = () => setNum((prev) => prev + 1);
  const intervalRef = useRef();
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    intervalRef.current = setInterval(increaseNum, 1000);
    return () => clearInterval(intervalRef.current);
  }, [started]);

  if (!started) {
    clearInterval(intervalRef.current)
  }

  if (reset && num > 0) {
    clearInterval(intervalRef.current)
    setNum(0)
  }

  const pad = (val) => {
    const valString = val.toString();
    if (valString.length < 2) {
      return "0" + valString;
    }
    return valString;
  };
  const minutesLabel = pad(parseInt(num / 60));
  const secondsLabel = pad(num % 60);

  return (
    <div className="timer">
      {minutesLabel}:{secondsLabel}
    </div>
  );
};

export default Timer;
