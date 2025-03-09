import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import TodoItem from "./TodoItem";
import { Todo } from "../types/todoTypes";

const TodoList: React.FC = () => {
  // Retrieve the list of todos from Redux store
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <ul>
      {todos.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks available</p>
      ) : (
        todos.map((todo: Todo) => <TodoItem todo={todo} />)
      )}
    </ul>
  );
};

// Use React.memo to optimise rendering
export default React.memo(TodoList);
