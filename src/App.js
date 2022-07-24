import Child from "./Child";
import { useState } from "react";

function App() {
  const [Counter, setCounter] = useState(0);
  console.log("Parent");

  return (
    <div className="App">
      <h1>Parent: {Counter}</h1>
      <button onClick={() => setCounter(Counter + 1)}>plus</button>
      <Child Counter={Counter} />
    </div>
  );
}

export default App;
