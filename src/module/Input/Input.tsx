const Input = (props: {
  inputValue: number;
  setNewValue: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <input
      value={props.inputValue}
      onChange={(e) => {
        console.log("e", e.target.value);
        props.setNewValue(parseInt(e.target.value));
      }}
    />
  );
};

export default Input;
