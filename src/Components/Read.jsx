import React, { useContext } from "react";
import { toast } from "react-toastify";
import { TodoContext } from "./TodoContext";

const Read = () => {
  const { todos, setTodos } = useContext(TodoContext);

  const deletehandler = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
    toast.error("🗑️ Task Deleted");
  };

  const renderTodos = todos.map((todo) => (
    <li
      key={todo.id}
      className="flex items-center justify-between px-5 py-4 bg-black/40 border border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 backdrop-blur-sm"
    >
      <span className="text-white font-medium tracking-wide">{todo.title}</span>
      <button
        onClick={() => deletehandler(todo.id)}
        className="ml-4 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-red-500 via-pink-600 to-purple-600 rounded-lg hover:from-red-600 hover:via-pink-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-red-500/40"
      >
        Delete
      </button>
    </li>
  ));

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-semibold text-white mb-6 tracking-wide">
        Pending Tasks
      </h1>
      {todos.length === 0 ? (
        <p className="text-gray-400 text-center">
          No tasks yet. Add some to get started!
        </p>
      ) : (
        <ul className="space-y-4">{renderTodos}</ul>
      )}
    </div>
  );
};

export default Read;
