import Button from "./Button.js";
import Alert from "./Alert.js";

export default function Controls(props) {
  return (
    <>
      {props.inputValue > 0 && !props.timerWorking && !props.alertActivated && (
        <>
          <Button text={"Start"} type={"submit"} handler={props.handleSubmit} />
          <Button text={"Reset"} type={"button"} handler={props.handleReset} />
        </>
      )}
      {props.timerWorking && (
        <Button
          text={"Reset Timer"}
          type={"button"}
          handler={props.handleResetTimer}
        />
      )}
      {props.alertActivated && (
        <>
          <Button
            text={"Turn Off"}
            type={"button"}
            handler={props.handleResetSound}
          />
          <Alert />
        </>
      )}
    </>
  );
}
