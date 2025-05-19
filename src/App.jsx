import React from "react";
import Create from "./Components/Create";
import Read from "./Components/Read";
import { TodoProvider } from "./Components/TodoContext";

const App = () => {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-3">
              Task Manager
            </h1>
            <p className="text-lg text-gray-400">
              Organize your tasks with elegance and clarity
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="backdrop-blur-md bg-white/5 border border-gray-700 rounded-2xl shadow-2xl p-8 hover:shadow-gray-600 transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">
                Create Task
              </h2>
              <Create />
            </div>

            <div className="backdrop-blur-md bg-white/5 border border-gray-700 rounded-2xl shadow-2xl p-8 hover:shadow-gray-600 transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">
                Your Tasks
              </h2>
              <Read />
            </div>
          </div>
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;
