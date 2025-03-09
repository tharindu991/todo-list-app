import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../redux/todoSlice";
import { Todo } from "../types/todoTypes";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const dispatch = useDispatch();

  // Function to handle updating the todo
  const handleUpdate = () => {
    if (!editText.trim()) return; // Prevent empty updates
    dispatch(updateTodo({ id: todo.id, text: editText }));
    setIsEditing(false); // Exit edit mode
  };

  return (
    <li className="flex justify-between items-center p-2 border-b">
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleUpdate}
          className="w-full p-1 border rounded"
          autoFocus
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <div>
        {/* Edit button */}
        <button
          onClick={() => setIsEditing(true)}
          className="text-blue-500 mr-2"
        >
          ✎
        </button>
        {/* Delete button */}
        <button
          onClick={() => dispatch(removeTodo(todo.id))}
          className="text-red-500"
        >
          ✕
        </button>
      </div>
    </li>
  );
};

// Use React.memo to optimise rendering
export default React.memo(TodoItem);
