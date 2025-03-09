import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const TodoForm: React.FC = () => {
  // Local state to store user input for a new todo
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  // Function to handle adding a new todo
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return; // Prevent adding empty todos
    dispatch(addTodo(text)); // Dispatch action to Redux store
    setText(""); // Clear input field after adding
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      {/* Input field for adding todos */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Add a new TODO"
      />
      {/* Button to submit todo */}
      <button
        type="submit"
        className="mt-2 w-full bg-blue-500 text-white p-2 rounded"
      >
        Add TODO
      </button>
    </form>
  );
};
// Use React.memo to optimise rendering
export default React.memo(TodoForm);
