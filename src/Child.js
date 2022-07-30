import { memo } from "react";
import { isEqual } from "lodash";

/*
HOC (High Order Component) : 함수 안에 인수로 컴포넌트 함수를 넣어서 다시 새로운 컴포넌트를 반환하는 함수
memo: 특정 컴포넌트를 memorization 해서(메모리 할당) 부모 컴포넌트와 state 값이 변경돼서 재렌더링 될 때 자식 컴포넌트도 같이 재렌더링 되는 것이 아닌 
렌더링 된 결과물을 재활용 한다. (자식 컴포넌트의 불필요한 재렌더링 방지)

컴포넌트 함수를 memo로 메모리제이션 처리했더라도 부모로부터 전달 받는 props 값이 있을 시 재호출된다.
*/

const Child = (props) => {
  const { Counter, updateCounter } = props;
  console.log("Child");
  return (
    <div>
      <h1>Child-{Counter}</h1>
      <button onClick={updateCounter}>update</button>
    </div>
  );
};

export default memo(Child, isEqual);
