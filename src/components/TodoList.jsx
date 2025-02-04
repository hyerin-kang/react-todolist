import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = ({ todoList, handleDelete, handleComplete, handleCancle }) => {
  return (
    <>
      <div>
        <h2>Working</h2>
        <TodoLists>
          {/* //false일때 */}
          {todoList.map(function (list) {
            if (!list.active) {
              //active: true
              return (
                <TodoItem
                  key={list.id}
                  list={list}
                  handleDelete={handleDelete}
                  handleComplete={handleComplete}
                ></TodoItem>
              );
            }
          })}
        </TodoLists>
      </div>
      <div>
        <h2>Done</h2>
        <TodoLists>
          {todoList.map(function (list) {
            if (list.active) {
              //active: false
              return (
                <TodoItem
                  key={list.id}
                  list={list}
                  handleDelete={handleDelete}
                  handleComplete={handleComplete}
                  handleCancle={handleCancle}
                ></TodoItem>
                // <li key={list.id}>
                //   <p>{list.title}</p>
                //   <p>{list.text}</p>
                //   <button
                //     onClick={() => {
                //       handleDelete(list.id);
                //     }}
                //   >
                //     삭제
                //   </button>
                //   <button
                //     onClick={() => {
                //       handleCancle(list.id);
                //     }}
                //   >
                //     취소
                //   </button>
                // </li>
              );
            }
          })}
        </TodoLists>
      </div>
    </>
  );
};

export default TodoList;

const TodoLists = styled.ul`
  display: flex;
  gap: 10px;
  padding: 0%;
  li {
    width: 200px;
    list-style: none;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 10px;
    box-sizing: border-box;
  }
`;
