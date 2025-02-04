const TodoItem = ({ list, handleDelete, handleComplete, handleCancle }) => {
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
      {!handleCancle ? (
        <button
          onClick={() => {
            handleComplete(list.id);
          }}
        >
          완료
        </button>
      ) : (
        <button
          onClick={() => {
            handleCancle(list.id);
          }}
        >
          취소
        </button>
      )}
    </li>
  );
};

export default TodoItem;
