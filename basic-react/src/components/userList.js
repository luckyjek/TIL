import React from 'react';

//props로 user값을 받아올 것이다.
function User({user}){
   
    return(
        <div>
            <b>{user.username}</b><span>({user.email})</span>
        </div>
    );
}

function UserList(){ //porps로 받아온 users, onRemove
    const users = [
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
    ]
    //array를 랜더링하는 jsx를 작성
    return(
        <div>
         {
             users.map(
                 user=>(
                    <User 
                        user={user} 
                        key = {user.id}
                    />
                 )
             )
         }
        </div>
    )
}
export default UserList;