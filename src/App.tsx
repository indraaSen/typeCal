import React, { useState } from "react";
import "./App.css";
import Button from "./module/Button/Button";
import Input from "./module/Input/Input";
import Counter from "./module/Counter/Couter";

function App() {
  const numArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const [newValue, setNewValue] = useState(0);

  const btFun = (btValue: number) => {
    console.log("btFun called",btValue);
    setNewValue(btValue)
  };

  const btArr = numArr.map((numValue) => (
    <Button key={numValue} btFun={btFun}  btName={numValue} />
  ));

  return (
    <div>
      <h1>react typescript</h1>
      {btArr}
      <div>
        <Input inputValue={newValue} setNewValue={setNewValue}/>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
      <Counter />
    </div>
  );
}

export default App;
