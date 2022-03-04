import React from 'react';

//CreateUser컴포넌트는 필요한 값들을 props로 받아와서 사용할 것이다. 그리고 내부에서 상태관리는 따로 하지 않을 것.
function CreateUser({username, email, onChange, onCreate}){
    return(
        <div>
            <input 
                name="username" 
                placeholder="계정명" 
                onChange={onChange} 
                value={username}
             
            />
            <input 
                name="email" 
                placeholder="이메일" 
                onChange={onChange} 
                value={email}
               
            />
            <button onClick={onCreate}>등록</button>
        </div>
    )
}

// export default CreateUser;
export default CreateUser;
