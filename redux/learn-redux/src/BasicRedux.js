import './App.css';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch, connect } from 'react-redux';
function reducer(currentState, action) { // store안에있는 state를 어떻게 바꿀것인가? 를 결정.
  if (currentState === undefined) { 
    return {
      number: 1
    }
  }
  const newState = { ...currentState }
  if (action.type === 'PLUS') { 
    newState.number++;
  }
  return newState;
}
const store = createStore(reducer);
console.log('store ', store);
export default function App() {
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
        <Provider store={store}>
          <Left1 />
          <Right1 />
        </Provider>
      </div>
    </div>
  );
}


function Left1(props) { 
  return <div>
    <h1>Left1 :</h1>
    <Left2 />
  </div>
}

function Left2(props) { 
  console.log('2');
  return <div>
    <h1>Left2 : </h1>
    <Left3/>
  </div>
}

function Left3(props) { 
  console.log('3');
  // function f(state) { 
  //   return state.number;
  // }
  const number = useSelector((state) => state.number); //함수를 인자로 받는다.
  return <div>
    <h1>Left3 : { number }</h1>
  </div>
}

function Right1(props) { 
  return (
    <div>
      <h1>Right1</h1>
      <Right2 />
    </div>
  )
}

function Right2(props) { 
  return (
    <div>
      <h1>Right2</h1>
      <Right3 />
    </div>
  )
}

function Right3(props) { 
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right3</h1>
      <input type="button" value="+" onClick={() => { 
        dispatch({type: 'PLUS'})
      }}/>
    </div>
  )
}

