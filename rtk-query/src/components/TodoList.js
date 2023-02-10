import React from "react";
import FormAdd from "./FormAdd";
import { useGetTodosQuery } from "../app/features/apiSlice";
import { TodoItem } from "./TodoItem";

const TodoList = () => {
  const { data, isLoading, isSuccess } = useGetTodosQuery();
  console.log(data);
  return (
    <div>
      <FormAdd />
      {isLoading && <p> Loading... </p>}
      <ul>
        {isSuccess &&
          data
            .map((todo) => {
              return <TodoItem key={todo.id} todo={todo} />;
            })
            .reverse()}
      </ul>
    </div>
  );
};

export default TodoList;
