import React from "react";
import { useState } from "react";
import Create from "./Components/Create";
import Read from "./Components/Read";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "sexy", isCompleted: false },
  ]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  console.log(todos);

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Task Manager</h1>
          <p className="text-gray-400">Organize your tasks efficiently</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
            <Create todos={todos} setTodos={setTodos} />
          </div>

          <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
            <Read todos={todos} setTodos={setTodos} onDelete={deleteTodo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
