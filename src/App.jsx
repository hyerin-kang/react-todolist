import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([
    {
      id: crypto.randomUUID(),
      title: "리액트공부하기11",
      text: "초기값FALSE",
      active: false,
    },
    {
      id: crypto.randomUUID(),
      title: "리액트공부하기22",
      text: "초기값TRUE",
      active: true,
    },
  ]);

  //추가하기
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !text) {
      alert("제목과 내용을 모두 입력하세요");
      return;
    }
    const newList = {
      id: crypto.randomUUID(),
      title: title,
      text: text,
      active: false,
    };
    setTodoList([newList, ...todoList]);

    //값비우기
    setTitle("");
    setText("");
  };

  //삭제하기
  const handleDelete = (id) => {
    const deleteList = todoList.filter(function (list) {
      return list.id !== id;
    });
    setTodoList(deleteList);
  };

  //완료처리
  const handleComplete = (id) => {
    const changeActive = todoList.map(function (list) {
      return list.id === id ? { ...list, active: true } : list;
    });
    setTodoList(changeActive);
  };

  //취소
  const handleCancle = (id) => {
    const changeActive = todoList.map(function (list) {
      return list.id === id ? { ...list, active: false } : list;
    });
    setTodoList(changeActive);
  };

  return (
    <>
      <h2>My Todo List</h2>
      <TodoForm
        handleSubmit={handleSubmit}
        title={title}
        setTitle={setTitle}
        text={text}
        setText={setText}
      ></TodoForm>
      <TodoList
        todoList={todoList}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
        handleCancle={handleCancle}
      />
    </>
  );
}

export default App;
