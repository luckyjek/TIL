// 퀴즈!
// 1. 문자열의 모든 캐릭터를 하나씩 출력하라.
const text = 'Hello World!';
// H
// e
// l
// ...
// !
for(let i = 0; i < text.length; i++) {
  console.log(text[i]);
}

// 2. 사용하는 id를 잘라내어 각각의 id를 배열로 보관
const ids = 'user1,user2,user3,user4';
// let array_ids = ids.split(',');

// for (let i = 0; i < array_ids.length; i++) { 
//   console.log(array_ids[i]);
// }

let result = ids.split(', ');
console.log(result)

// 3. 1초에 한번 씩 시계를 (날짜 포함 ) 출력해보자.
// setInterval

setInterval(()=>{
  const now = new Date()
  console.log(now.toLocaleString('ko-KR'))
},1000)

//---------------------------------------------------코딩테스트
function solution(string) {
  let answer = string;

  const nums = [
      'zero', 'one', 'two', 'three', 'four', 
      'five', 'six', 'seven', 'eight', 'nine'
  ];
  nums.forEach((el, id) => {
      // console.log('elid:',el, id)
      const arr = answer.split(el); //z
      answer = arr.join(id);
  });
  return Number(answer);
}

console.log(solution('fournine'));