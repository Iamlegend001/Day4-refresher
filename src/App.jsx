import React from "react";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "sexy", isCompleted: false },
  ]);

  const [title, settitle] = useState("");
  const [complete, setcomplete] = useState(false)
  const [gender, setgender] = useState("male")
  return (
    <div>
      <h1>Create task</h1>
      <form action="">
        <input
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
          placeholder="title"
        />
        <br />
        <input
          onChange={(e) => setcomplete(e.target.checked)}
          checked={complete}
          type="checkbox"
        />
        Completed
        <br />
        <br />
        <br />
        <input
          onChange={(e) => setgender(e.target.value)}
          checked = {gender == "male" && true}
          type="radio"
          value="male"
        />
        male
        <input
          onChange={(e) => setgender(e.target.value)}
          checked = {gender == "female" && true}
          type="radio"
          value="female"
        />
        female
        <br />
        <br />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
