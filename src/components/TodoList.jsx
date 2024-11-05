import "../styles/TodoList.css";
import ListItem from "./ListItem";

const TodoList = () => {
  return (
    <div className="todolist">
      <h3>할 일 목록</h3>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
      ></input>
      <div>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
      </div>
    </div>
  );
};

export default TodoList;