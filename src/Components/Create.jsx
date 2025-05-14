import { nanoid } from "nanoid";
import React, { useState } from "react";

const Create = (props) => {
  const todos = props.todos;
  const setTodos = props.setTodos;
  const [title, settitle] = useState("");
  const SubmitHandler = (e) => {
    e.preventDefault();

    const newtodo = {
      id: nanoid(),
      title: title,
      isCompleted: false,
    };
    console.log(newtodo);
    // const copytodos = [...todos];
    // copytodos.push(newtodo);
    // setTodos(copytodos);
    setTodos([...todos, newtodo]);

    settitle("");
  };
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Create New Task</h1>
      <form onSubmit={SubmitHandler} className="space-y-4">
        <div>
          <input
            onChange={(e) => settitle(e.target.value)}
            value={title}
            type="text"
            placeholder="Enter task title"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Create;
