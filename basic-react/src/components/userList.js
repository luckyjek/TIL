import React from 'react';

//props로 user값을 받아올 것이다.
function User({user}){
   
    return(
        <div>
            <b>{user.username}</b><span>({user.email})</span>
        </div>
    );
}

function UserList({users}){ //porps로 받아온 users, onRemove

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