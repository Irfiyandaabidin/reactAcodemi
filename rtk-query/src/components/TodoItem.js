import React, { useState } from "react";
import { useDeleteTodoMutation, useUpdateTodoMutation } from "../app/features/apiSlice";

export const TodoItem = ({ todo }) => {
  const [deleteTodo] = useDeleteTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [isCompleted, setIsCompleted] = useState(todo.completed);
  const completedHandler = () => {
    setIsCompleted(!todo.completed);
    updateTodo({ ...todo, completed: !todo.completed });
  };

  return (
    <div>
      <li>
        <div style={{ textDecoration: isCompleted && "line-through" }}>
          <input type="checkbox" className="checkbox" checked={isCompleted} onChange={completedHandler} />
          {todo.title}
        </div>
        <button className="delete" onClick={() => deleteTodo({ id: todo.id })}>
          Delete
        </button>
      </li>
    </div>
  );
};
