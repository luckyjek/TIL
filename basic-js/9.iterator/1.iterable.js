// Iterable === 순회가 가능하다(순회•반복이란 의미) 
// 자바스크립트에서는 `이터레이션 프로토콜` 이라고 부른다. 

// 프로토콜이란 규격, 약속, 인터페이스와 동일.
// 순회가 가능하다 (for...of , spread)-> 순회가 가능한 연산자.
// [Symbol.iterator](): IterableIterator<T>;
// Array, String, Map, Set도 이터레이터 프로토콜을 따르기때문에 for...of , spread 에서 사용가능.

// 즉, 이터레이션 프로토콜이라는 것은 순회가 가능하기위해서 따라야되는 규칙 같은것인데,
// 이 규격을 따르면 for...of , spread에서 사용이 가능하군요. 이 연산자를 사용해서 무언가를 순회하는것이다.
// 그리고 기본적인 자료구조는 Array, String, Map, Set이 있다.

// 심볼정의를 가진 객체나, 특정한 함수가 IterableIterator<T>를 리턴한다는 것은
// 순회 가능한 객체다! 라는 것을 의미한다.

// 순회가 가능하면 무엇을 할 수 있나?
// 바로! 빙글빙글 도는 반복문, 연산자들을 사용할 수 있다.
const array = [1, 2, 3];
// console.log('array.values()',array.values());
// console.log('entries()',array.entries());
// console.log('keys()',array.keys());


// iterator 사용해 보기!
const iterator = array.values();
// console.log('iterator :', iterator.next().value, iterator.next().done);
// console.log('iterator :', iterator.next().value, iterator.next().done);
// console.log('iterator :', iterator.next().value, iterator.next().done);
// console.log('iterator :',iterator.next().done);
for (const item of iterator) { 
    console.log(item);
}

while(true){
    const item = iterator.next();
    // console.log(item)
    if(item.done) break;
    console.log(item.value);
}

// for...of를 사용하면, 배열안 item을 순회하면서 하나하나 할당해서 가져올수 있다.
// for(let item of array){
//     console.log(item);
// }

// for(let item of array.keys()){
//     console.log(item);
// }

// const obj = {id:123, name:'Ellie'};
// for(const key in obj){ // key를 출력
//     console.log(key);
// }