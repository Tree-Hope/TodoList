import "../styles/TodoInput.css";
import { useState, useContext } from "react";
import { DispatchContext } from "../App";

const TodoInput = () => {
  const [addInput, setAddInput] = useState("");
  const { onCreate } = useContext(DispatchContext);

  const onChangeInput = (e) => {
    setAddInput(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (addInput === "") {
      return;
    }

    onCreate(addInput);
    setAddInput("");
  };

  return (
    <div className="todoinput">
      <input
        value={addInput}
        onChange={onChangeInput}
        onKeyDown={onKeyDown}
        type="text"
        placeholder="추가할 할 일을 입력하세요"
      ></input>
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default TodoInput;