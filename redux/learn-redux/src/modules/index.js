import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

// 리듀서가 합쳐졌다. 루트 리듀서가 만들어졌으니, 이제 스토어를 만들어보자.
const rootReducer = combineReducers({
  counter,
  todos
});

export default rootReducer;