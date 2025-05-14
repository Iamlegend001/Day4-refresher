import React from "react";

const Read = (props) => {
  const todos = props.todos;
  const renderTodos = todos.map((todo) => {
    return (
      <li
        key={todo.id}
        className="flex items-center p-4 mb-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200"
      >
        <span className="text-gray-800">{todo.title}</span>
      </li>
    );
  });
  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Pending Tasks</h1>
      {todos.length === 0 ? (
        <p className="text-gray-500 text-center">
          No tasks yet. Add some tasks to get started!
        </p>
      ) : (
        <ul className="space-y-2">{renderTodos}</ul>
      )}
    </div>
  );
};

export default Read;
