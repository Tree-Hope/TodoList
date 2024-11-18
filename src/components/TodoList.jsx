import "../styles/TodoList.css";
import ListItem from "./ListItem";
import { useContext, useState } from "react";
import { StateContext } from "../App";

const TodoList = () => {
  const inputData = useContext(StateContext);
  const [value, setValue] = useState("");

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const filteredData = inputData.filter((item) =>
    item.content.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div className="todolist">
      <h3>할 일 목록</h3>
      <input
        value={value}
        onChange={onChangeInput}
        type="text"
        placeholder="검색어를 입력하세요"
      ></input>
      <div>
        {filteredData.map((item) =>
            <ListItem key={item.id} {...item}></ListItem>)}
      </div>
    </div>
  );
};

export default TodoList;