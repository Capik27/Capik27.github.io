export default function Button(props) {
  return (
    <button className="form_button" type={props.type} onClick={props.handler}>
      {props.text}
    </button>
  );
}
