import "../styles/ListItem.css";

const ListItem = () => {
  return (
    <div className="listitem">
      <input type="checkbox"></input>
      <div className="content">todo</div>
      <div className="date">{new Date().getTime()}</div>
      <button>삭제</button>
    </div>
  );
};

export default ListItem;