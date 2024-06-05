import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { toggleShowCompletedTodos, toggleTodo } from "../state/todosSlice";

const StyledTodo = styled.li`
  text-decoration: ${(pr) => (pr.$complete ? "line-through" : "initial")};
  cursor: pointer;
`;

export default function Todo() {
  // use the useDispatch hook to get the dispatch function from the store
  const dispatch = useDispatch();
  // use the useSelector hook to get the todos and showCompleted state from the store
  const todos = useSelector((state) => state.todosState.todos);
  const showCompletedTodos = useSelector(
    (state) => state.todosState.showCompleted
  );

  return (
    <div id="todos">
      <h3>Todos</h3>
      <ul>
        {todos
          .filter((todo) => {
            return showCompletedTodos || !todo.complete;
          })
          .map((todo) => (
            <StyledTodo
              onClick={() => dispatch(toggleTodo(todo.id))}
              $complete={todo.complete}
              key={todo.id}
            >
              <span>
                {todo.label}
                {todo.complete && " ✔️"}
              </span>
            </StyledTodo>
          ))}
      </ul>
      <button onClick={() => dispatch(toggleShowCompletedTodos())}>
        {showCompletedTodos ? "Hide" : "Show"} completed todos
      </button>
    </div>
  );
}
