import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos';
// 컨테이너 컴포넌트 
// 리덕스 스토어의 상태를 조회하거나, 
// 액션을 디스패치 할 수 있는 컴포넌트를 의미합니다.
// 그리고, HTML 태그들을 사용하지 않고,
// 다른 '프리젠테이셔널 컴포넌트(Todos)'들을 불러와서 사용합니다.

function TodosContainer() {
  // useSelector 에서 꼭 객체를 반환 할 필요는 없습니다.
  // 한 종류의 값만 조회하고 싶으면 그냥 원하는 값만 바로 반환하면 됩니다.
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const onCreate = text => dispatch(addTodo(text));
  const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]); // 최적화를 위해 useCallback 사용
  // useCallback을 하나에만 적용시키는 이유는 onCreate는 React Memo가 적용된 하위 컴포넌트로 내려보내지 않기 때문입니다.
  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}

export default TodosContainer;