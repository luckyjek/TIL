import React, {useRef, useState}from 'react';
import CreateUser from './components/createUser';
import UserList from './components/userList';
function App() {
  const [inputs, setInputs] = useState({
    username:'',
    email:'',
  });
  const {username, email} = inputs;

  const onChange = e =>{
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]:value //받아온 name값을 value로 덮어 씌우겠다.(현재 name이 가르키고있는것은 username or email)
    })
  }
  const [users,setUsers] = useState([
    {
        id:1,
        username:'velopert',
        email:'public.thxjek@gmail.com'
    },
    {
        id:2,
        username:'tester',
        email:'tester@example.com'
    },
    {
        id:3,
        username:'liz',
        email:'liz@example.com'
    }
]);
  const nextId = useRef(4); 
  const onCreate = () =>{
    const user = {
      id:nextId.current,
      username,
      email,
    }
    //setUsers([...users, user]); // 배열로 구조화할당 -> 기존의 배열을 복사하면서 새 항목을 추가해준다.
    setUsers(users.concat(user));
    setInputs({ // 객체
      username:'',
      email:''
    })
    console.log(nextId.current); //4
    nextId.current += 1; //기존값에다가 +1 을해준다.
  }
    return(
      <div >
       <CreateUser
         username={username} 
         email={email} 
         onChange={onChange} 
         onCreate={onCreate}
        />
       <UserList users={users}/>
      </div>
  )
}

export default App;

