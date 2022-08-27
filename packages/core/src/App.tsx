import React, { ChangeEvent, ChangeEventHandler } from "react";
import logo from "./logo.svg";
import "normalize.css";
import styled from "styled-components";

function App() {
  const [todoList, setTodoList] = React.useState([
    { content: "111", isChecked: false },
  ]);
  const [newTodoContent, setNewTodoContent] = React.useState("");

  const handleCheckboxChange = (index: number) => {
    const newTodoList = [...todoList];
    newTodoList[index].isChecked = !newTodoList[index].isChecked;
    setTodoList(newTodoList);
  };

  const handleNewTodoContentChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setNewTodoContent(e.target.value);
  };

  const createTodoItem = () => {
    if (newTodoContent === "") {
      return;
    }
    const newTodoList = [...todoList];
    newTodoList.unshift({ content: newTodoContent, isChecked: false });
    setTodoList(newTodoList);
  };

  return (
    <StyledApp>
      <StyledHeader>
        <h1>Hello-Todo-List</h1>
      </StyledHeader>
      <StyledBody>
        <StyledNewTodo>
          <input
            className="new-todo-input"
            value={newTodoContent}
            onChange={handleNewTodoContentChange}
          />
          <button onClick={createTodoItem}>冲</button>
        </StyledNewTodo>
        {todoList.map((item, index) => {
          return (
            <StyledTodoItem key={index}>
              <input
                type="checkbox"
                id={"checkbox" + index}
                checked={item.isChecked}
                onChange={() => handleCheckboxChange(index)}
              />
              <label htmlFor={"checkbox" + index}></label>
              <span>{item.content}</span>
            </StyledTodoItem>
          );
        })}
      </StyledBody>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
`;

const StyledHeader = styled.div`
  background-color: #bababa;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;

  h1 {
    margin: 0;
  }
`;

const StyledBody = styled.div`
  padding: 20px 30%;
`;

const StyledNewTodo = styled.div`
  display: flex;
  margin-bottom: 20px;

  .new-todo-input {
    width: 100%;
    margin-right: 10px;
  }

  button {
    width: 60px;
  }
`;

const StyledTodoItem = styled.div`
  width: 100%;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: aliceblue;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  input {
    display: none;
  }

  label {
    transition: all 0.2s;
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid #2eb5f0;
    position: relative;
    cursor: pointer;
    margin-right: 10px;
  }
  label::before {
    display: inline-block;
    content: " ";
    width: 12px;
    border: 2px solid #fff;
    height: 6px;
    border-top: none;
    border-right: none;
    transform: rotate(-45deg);
    top: 5px;
    left: 3px;
    position: absolute;
    opacity: 0;
  }
  input:checked + label {
    background: #2eb5f0;
  }
  input:checked + label::before {
    opacity: 1;
  }
`;

export default App;
