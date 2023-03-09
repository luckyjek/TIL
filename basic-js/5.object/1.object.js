// 객체란, 서로 연관있는 `속성`과 `행동`을 묶어주기 위해 사용된다.
// point: 밀접하게 관련 있는 상태(데이터)와 행동(함수)을 객체로 묶는다.
// 속성 === 데이터(프로퍼티)
// 행동 === 행동(메소드)

//ex. 순수 데이터 객체 : 
// let apple = {
//     name: 'apple',
//     color: 'red',
//     display:'🍎'
// }

//ex. 상태와 행동 객체 : (실제 코딩에서도 가장 많이 사용.)
// let apple = {
//     name: 'apple', // 객체안에서 상태를 가지고 있는 data를 속성(property)라 한다.
//     display:function(){ // 객체와 관련된 함수 포함 (행동함수는 method라고 부른다.)
//         console.log('')
//     }
// }


// Object literal {key: value}
// new Object()
// Object.create();
// key - 문자, 숫자, 문자열, 대괄호 [],심볼
// value - 원시값, 객체 (함수)
let apple = {
    name: 'apple', //보통 이와같이 key는 문자로 만든다. helloBye: value 이런식으로 카멜case도 가능
    'hello-bye':'✋🏻',
    0:1,
    ['hello-bye1']:'🙆🏻‍♀️',
}

//속성, 데이터에 접근하기 위해서는?
console.log(apple.name); // 마침표 표기법 dot notation
console.log(apple['name']);
console.log(apple['hello-bye']);
console.log(apple['hello-bye1']);// 대괄호 표기법 bracket notation

//속성 (동적으로)추가
apple.emoji = '🍎';
console.log(apple.emoji);
console.log(apple['emoji']); //항상 문자열로 감싸기
console.log(apple);

//속성 삭제
delete apple.emoji;
console.log(apple);