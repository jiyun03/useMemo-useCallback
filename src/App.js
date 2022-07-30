/*
	props로 전달되는 값이 참조형 자료면 부모에서 해당 props값을 변경하지 않더라도 자식컴포너트는 재랜더링됨
	-- 참조형 자료는 같은 할당하더라도 메모리에 할당되는 값은 해당 값의 참조주소이기 때문에 부모컴포넌트가 재랜더링될때메다 메모리에 매번 다른 참조주소가 할당됨, 그래서 값은 같을 지언정 매번 다른 참조링크가 자식컴포넌트에 전달되므로  memo로 자식 컴포넌트를 메모이제이션 처리했더라도 다른 props값이 들어온걸로 인지해서 재호출 됨
	-- lodash의 isEqau을 memo의 두번째 인수로 전달하면 props로 전달되는 참조링크가 값자체를 비교처리
*/
/*
	useCallback
	자식 컴포넌트에 함수를 props로 전달시, 참조형 자료이므로 자식 컴포넌트 강제 재호출됨
	이때 useCallback을 이용해서 props로 전달되는 함수자체를 useCallback의 첫번째 인수로 전달, 두번째 인수로 의존성 배열 등록
	- props로 전달되는 인수인 함수자체를 메모이제이션 처리
*/


import Child from "./Child";
import { useState, useCallback } from "react";

function App() {
  console.log("Parent");
  const [Counter, setCounter] = useState(0);
  const [Input, setInput] = useState("");

  // const arr = [1, 2, 3];
  const updateCounter = useCallback(() => setCounter(Counter + 1), []);
  

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
      {/* <Child Counter={Counter} arr={arr} /> */}
      <Child Counter={Counter} updateCounter={updateCounter} />
    </div>
  );
}

export default App;
