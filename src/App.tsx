import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-xl font-bold mb-4">TODO List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
};

export default React.memo(App);
