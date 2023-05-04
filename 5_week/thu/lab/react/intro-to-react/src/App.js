import { useState } from "react";

import "./App.css";
import Child from "./components/Child";

function App() {
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <h1>App Component</h1>
      {/* <h3>User Input: {input}</h3> */}
      <input
        type="text"
        placeholder="Hello World!"
        onChange={(e) => setInput(e.target.value)}
      />
      <Child userInput={input} />
    </div>
  );
}

export default App;
