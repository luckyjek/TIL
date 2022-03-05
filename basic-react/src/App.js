import React, {useRef, useReducer, useMemo, useCallback}from 'react';
import CreateUser from './components/createUser';
import UserList from './components/userList';

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는중...');
  //active가 true인것만 필터해서 length를 가져옴.
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs: {
    username:'',
    email:'',
  },
  users:[
    {
        id:1,
        username:'velopert',
        email:'public.thxjek@gmail.com',
        active:true,

    },
    {
        id:2,
        username:'tester',
        email:'tester@example.com',
        active:false,
    },
    {
        id:3,
        username:'liz',
        email:'liz@example.com',
        active:false,
    }
]
}

function reducer(state, action){
  switch(action.type){
    case 'CHANGE_INPUT' :
        return{
        ...state,
        inputs:{
          ...state.inputs,
          [action.name] : action.value
        }
      };
    case 'CREATE_USER' : 
        return{
        inputs: initialState.inputs,
        users:state.users.concat(action.user)
      };
    case 'TOGGLE_USER' :
        return{
        ...state,
        users: state.users.map(user=>
          user.id === action.id
            ? {...user, active : !user.active}
            : user
          )
      };
    case 'REMOVE_USER' :
        return{
        ...state,
        users: state.users.filter(user=>user.id !== action.id)
      };
      default:
        throw new Error('Unhandled action');
  }
}

function App() {
  //state 안에 users, inputs가 들어있다.
    const [state, dispatch] = useReducer(reducer, initialState);
    const nextId = useRef(4);
    const {users} = state;
    const {username, email} = state.inputs;

    const onChange = useCallback(e =>{
      const {name, value} = e.target;
      dispatch({
        type:'CHANGE_INPUT',
        name,
        value
      })
    }, []);

    const onCreate = useCallback(()=>{
      dispatch({
        type:'CREATE_USER',
        user:{
          id:nextId.current,
          username,
          email,
        }
      })
      nextId.current +=1;
    },[username, email]);

    const onToggle = useCallback(id =>{
      dispatch({
        type:'TOGGLE_USER',
        id
      });
    },[]);

    const onRemove = useCallback(id=>{
      dispatch({
        type:'REMOVE_USER',
        id
      });
    },[])

    const count = useMemo(() => countActiveUsers(users), [users])
    return(
      <div >
       <CreateUser 
          username={username} 
          email={email} 
          onChange={onChange}
          onCreate={onCreate}
       />
       <UserList users={users}
        onToggle={onToggle}
        onRemove={onRemove} 
       />
      <div>활성 사용자 수 : {count}</div>
      </div>
      
  )
}

export default App;

