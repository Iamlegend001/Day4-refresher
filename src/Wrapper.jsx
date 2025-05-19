import React, { createContext, useState } from "react";

export const todoContext = createContext(null);
const Wrapper = (props) => {
  const [todos, setTodos] = useState([
    { id: 1, title: "sexy", isCompleted: false },
  ]);
  return (
    <todoContext.Provider value={[todos, setTodos]}>
      {props.children}
    </todoContext.Provider>
  );
};

export default Wrapper;
