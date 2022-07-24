import { memo } from "react";

/*
HOC (High Order Component) : 함수 안에 인수로 컴포넌트 함수를 넣어서 다시 새로운 컴포넌트를 반환하는 함수
memo: 특정 컴포넌트를 memorization 해서(메모리 할당) 부모 컴포넌트와 state 값이 변경돼서 재렌더링 될 때 자식 컴포넌트도 같이 재렌더링 되는 것이 아닌 
렌더링 된 결과물을 재활용 한다. (자식 컴포넌트의 불필요한 재렌더링 방지)
*/

const Child = (props) => {
  console.log("Child");
  return <div>Child</div>;
};

export default memo(Child);
