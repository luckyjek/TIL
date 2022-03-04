import React from 'react';

//props로 user값을 받아올 것이다.
function User({user, onRemove, onToggle}){
   const {username, email, id, active} = user;
    return(
        <div>
            <b 
              style={{
                color: active ? 'green' : 'black',
                cursor:'pointer'
              }}
              onClick={()=>onToggle(id)}
            >
                {username}
            </b>
            &nbsp;
            <span>({email})</span>
            <button onClick={()=>onRemove(id)}>삭제</button>
        </div>
    );
}

function UserList({users, onRemove, onToggle}){ //porps로 받아온 users, onRemove

    //array를 랜더링하는 jsx를 작성
    return(
        <div>
         {
             users.map(
                 user=>(
                    <User 
                        user={user} 
                        key = {user.id}
                        onRemove = {onRemove}
                        onToggle = {onToggle}
                    />
                 )
             )
         }
        </div>
    )
}
export default UserList;