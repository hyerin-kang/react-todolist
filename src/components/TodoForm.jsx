import styled from "styled-components";

const TodoForm = ({ handleSubmit, title, setTitle, text, setText }) => {
  return (
    <InputForm onSubmit={handleSubmit}>
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
    </InputForm>
  );
};

export default TodoForm;

const InputForm = styled.form`
  background: #ccc;
  padding: 20px;
  label {
    input {
      margin: 0px 10px;
    }
  }
`;
