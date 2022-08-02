import { useState, useEffect } from "react";
import "../style/Timer.css";

export function StaticTimer() {
  return <span className="timer">00:00</span>;
}

export function Timer({ initialTime, endTimer }) {
  const [time, setTime] = useState(initialTime);
  const period = 1000;

  useEffect(() => {
    if (time == 0) {
      endTimer();
      return;
    }
    const id = setTimeout(() => {
      setTime(function (prevTime) {
        return prevTime - 1;
      });
    }, period);
    return () => {
      clearTimeout(id);
    };
  }, [time]);

  let s = Math.trunc(time / 60);
  const min = s > 9 ? s : `0${s}`;
  s = time % 60;
  const sec = s > 9 ? s : `0${s}`;

  return (
    <span className="timer">
      {min}:{sec}
    </span>
  );
}
