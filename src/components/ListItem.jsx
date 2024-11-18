import "../styles/ListItem.css";
import { useContext } from "react";
import { DispatchContext } from "../App";

const ListItem = ({ id, isDone, content, createdDate }) => {
  const { onUpdate, onDelete } = useContext(DispatchContext);

  const onClickUpdate = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="listitem">
      <input onChange={onClickUpdate} checked={isDone} type="checkbox"></input>
      <div className="content">{content}</div>
      <div className="date">{new Date(createdDate).toLocaleDateString()}</div>
      <button onClick={onClickDelete}>삭제</button>
    </div>
  );
};

export default ListItem;