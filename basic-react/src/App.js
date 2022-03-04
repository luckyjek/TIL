import React, {useRef, useState, useMemo, useCallback}from 'react';
import CreateUser from './components/createUser';
import UserList from './components/userList';

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는중...');
  //active가 true인것만 필터해서 length를 가져옴.
  return users.filter(user=>user.active).length;
}
function App() {
  const [inputs, setInputs] = useState({
    username:'',
    email:'',
  });
  const {username, email} = inputs;

  const onChange = useCallback(e =>{
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]:value //받아온 name값을 value로 덮어 씌우겠다.(현재 name이 가르키고있는것은 username or email)
    })
  },[inputs]);
  const [users,setUsers] = useState([
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
]);
  const nextId = useRef(4); 
  const onCreate = useCallback(() =>{
    const user = {
      id:nextId.current,
      username,
      email,
    }
    //setUsers([...users, user]); // 배열로 구조화할당 -> 기존의 배열을 복사하면서 새 항목을 추가해준다.
    setUsers(users=>users.concat(user));
    setInputs({ // 객체
      username:'',
      email:''
    })
    console.log(nextId.current); //4
    nextId.current += 1; //기존값에다가 +1 을해준다.
  },[username, email]); 

  const onRemove = useCallback(id =>{
    setUsers(users=>users.filter(user => user.id !== id)); 
  },[]);
  const onToggle = useCallback(id =>{
    setUsers(users=>users.map(
      user => user.id === id
      ? {...user, active : !user.active}
      : user
    ))
  },[]);
  //첫번째 파라미터는 함수 , 첫번째 파라미터는 deps
  //결국 []배열안에 넣는 값이 바뀌어야만 1번재 파라미터의 값을 새로 연산해주겠다. 라는것이다.
  //()=>countActiveUsers(users) 함수는 [users]가 바뀔때에만 호출이되고, 그렇지않으면 만들어놨던 값을 재사용한다.
  const count = useMemo(()=>countActiveUsers(users),[users]);
    return(
      <div >
       <CreateUser
         username={username} 
         email={email} 
         onChange={onChange} 
         onCreate={onCreate}
        />
       <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>활성 사용자 수 : {count}</div>
      </div>
      
  )
}

export default App;

