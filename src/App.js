import Child from "./Child";
import { useState } from "react";

function App() {
  console.log("Parent");
  const [Counter, setCounter] = useState(0);
  const [Input, setInput] = useState("");

  const arr = [1, 2, 3];

  return (
    <div className="App">
      <h1>Parent: {Counter}</h1>
      <button onClick={() => setCounter(Counter + 1)}>plus</button>
      <input
        type="text"
        value={Input}
        onChange={(e) => setInput(e.target.value)}
      />
      {/* 자식 컴포넌트에 prop로 전달되는 값이 원시형 다료면 재렌더링 방지 기능, 만약 참조형 자료가 전달 되면 재렌더링 방지가 안된다. */}
      <Child Counter={Counter} arr={arr} />
    </div>
  );
}

export default App;
