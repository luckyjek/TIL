// 퀴즈!
// 1. 문자열의 모든 캐릭터를 하나씩 출력하라
const text = 'Hello World!';
// H
// e
// l 
// l
// .. 
// !
for(let i = 0; i < text.length; i++){
    console.log(text[i]);
}

console.log('--------------------------');

const outputText = (text) => {
    for(let i = 0; i < text.length; i++){
        console.log(text[i]);
    }
}
outputText(text);

// 2. 사용자들의 id를 잘라내어 각각의 id를 배열로 보관
const ids = 'user1, user2, user3, user4';
// ['user1, user2, user3, user4'] 이와같이 만들기

// console.log(ids.split(', '));
const array = ids.split(', ');
console.log(array);
console.log(array[0]);
console.log(array[1]);

// 3. 1초에 한번씩 시계를 (날짜포함) 출력해보자


setInterval(() => {
    const now = new Date();
    console.log(now.toLocaleString('ko-KR'));
}, 1000);