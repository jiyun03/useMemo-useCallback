import Child from "./Child";
import { useState } from "react";

function App() {
  console.log("Parent");
  const [Counter, setCounter] = useState(0);
  const [Input, setInput] = useState("");

  return (
    <div className="App">
      <h1>Parent: {Counter}</h1>
      <button onClick={() => setCounter(Counter + 1)}>plus</button>
      <input
        type="text"
        value={Input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Child Counter={Counter} />
    </div>
  );
}

export default App;
