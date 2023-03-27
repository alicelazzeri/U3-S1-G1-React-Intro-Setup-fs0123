const ButtonComponent = props => {
  return (
    <button
      style={{
        fontSize: props.fSize + "rem",
        backgroundColor: props.bgColor,
        borderColor: props.borderCol,
        color: props.color,
      }}
    >
      {props.text}
    </button>
  );
};

export default ButtonComponent;
