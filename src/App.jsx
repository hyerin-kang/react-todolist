import { useState } from "react";

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
      <form onSubmit={handleSubmit}>
        <label>
          <span>제목</span>
          <input
            type="text"
            placeholder="제목입력"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <label>
          <span>내용</span>
          <input
            type="text"
            placeholder="내용 입력"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </label>
        <button type="submit">추가하기</button>
      </form>
      <ul>
        <h2>Working</h2>
        {/* //false일때 */}
        {todoList.map(function (list) {
          if (!list.active) {
            //active: true
            return (
              <li key={list.id}>
                <p>{list.title}</p>
                <p>{list.text}</p>
                <button
                  onClick={() => {
                    handleDelete(list.id);
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    handleComplete(list.id);
                  }}
                >
                  완료
                </button>
              </li>
            );
          }
        })}
      </ul>
      <ul>
        <h2>Done</h2>
        {todoList.map(function (list) {
          if (list.active) {
            //active: false
            return (
              <li key={list.id}>
                <p>{list.title}</p>
                <p>{list.text}</p>
                <button
                  onClick={() => {
                    handleDelete(list.id);
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    handleCancle(list.id);
                  }}
                >
                  취소
                </button>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
}

export default App;
