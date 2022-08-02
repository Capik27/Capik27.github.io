import { useState } from "react";
import { Timer, StaticTimer } from "./Timer.js";
import Controls from "./Controls.js";
import "../style/Form.css";

export default function Form() {
  const [inputValue, setInputValue] = useState("");
  const [timerWorking, setTimerWorking] = useState(false);
  const [alertActivated, setAlertActivated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTimerWorking(true);
  };

  const handleClickReset = () => {
    setInputValue("");
  };

  const handleClickResetTimer = () => {
    setTimerWorking(false);
  };

  const handleClickResetSound = () => {
    setAlertActivated(false);
  };

  const handleEndTimer = () => {
    setTimerWorking(false);
    setAlertActivated(true);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form_input"
          placeholder="Seconds"
          type="number"
          value={inputValue}
          onChange={(e) => {
            e.target.value < 0
              ? setInputValue(0)
              : setInputValue(e.target.value);
          }}
          disabled={timerWorking || alertActivated}
        />
        <Controls
          inputValue={inputValue}
          timerWorking={timerWorking}
          alertActivated={alertActivated}
          handleSubmit={handleSubmit}
          handleReset={handleClickReset}
          handleResetTimer={handleClickResetTimer}
          handleResetSound={handleClickResetSound}
        />
      </form>
      {timerWorking ? (
        <Timer initialTime={inputValue} endTimer={handleEndTimer} />
      ) : (
        <StaticTimer />
      )}
    </>
  );
}
