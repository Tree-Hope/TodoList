import './App.css';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { createContext, useReducer, useRef } from 'react';

const data = [
  {
    id: 1,
    isDone: false,
    content: "리액트 공부하기",
    createdDate: new Date().getTime()
  },
  {
    id: 2,
    isDone: false,
    content: "자바스크립트 공부하기",
    createdDate: new Date().getTime()
  }
];

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        action.id === item.id ? { ...item, isDone: item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) =>
        item.id !== action.id
      );
    default:
      return state;
  }
};

export const StateContext = createContext();
export const DispatchContext = createContext();

function App() {
  const [inputData, dispatch] = useReducer(reducer, data);
  const idRef = useRef(3);

  const onCreate = ({ isDone, content, createdDate }) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone,
        content,
        createdDate
      }
    });
  };

  const onUpdate = (id) => {
    dispatch({
      type: "UPDATE",
      id
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id
    });
  };

  return (
    <div className="app">
      <StateContext.Provider value={inputData}>
        <DispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
          <Header></Header>
          <TodoInput></TodoInput>
          <TodoList></TodoList>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </div>
  );
}

export default App;
