import React, {useState, useRef} from 'react';

function InputSample(){
    const [inputs, setInputs] = useState({
        name:'',
        nickname:'',
    });
    const nameInput = useRef(); //useRef호출->nameInput라는 객체를 만듬
    const {name, nickname} = inputs;

    const onChange = (e)=>{
        // console.log(e.target.name);
        // console.log(e.target.value);
        const {name, value} = e.target; 
        setInputs({
            ...inputs,
            [name]:value, //실제 name값이 무엇을 가르키고있는지에따라 다른 key값을 가르킨다.
        });
    }
    const onReset = ()=>{
        setInputs({
            name:'',
            nickname:'',
        })
        //current가 DOM을 가르킨다. -> 그다음 DOM api중의 fucou함수를 사용한다.
        nameInput.current.focus();
    }

    return(
        <div>
          <input 
            name="name" 
            placeholder="이름" 
            onChange={onChange} 
            value={name}
            ref={nameInput}
          />
          <input 
            name="nickname" 
            placeholder="닉네임" 
            onChange={onChange} 
            value={nickname}
          />
          <button 
            onClick={onReset}
          >초기화
          </button>
          
          <div>
              <b>값 :</b>
              {name} ({nickname})
          </div>
        </div>
    )
}

export default InputSample;