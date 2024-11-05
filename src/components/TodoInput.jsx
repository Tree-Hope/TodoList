import "../styles/TodoInput.css";

const TodoInput = () => {
  return (
    <div className="todoinput">
      <input
        type="text"
        placeholder="추가할 할 일을 입력하세요"
      ></input>
      <button>추가</button>
    </div>
  );
};

export default TodoInput;