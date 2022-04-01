// 동등 비교 관계 연산자 (Equality operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름

console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);
console.log(2 == '2');
console.log(2 === '2'); // ✨
console.log(true == 1);
console.log(true === 1);
console.log(false == 0);
console.log(false === 0);

console.clear();

const obj1 = {
    name: 'js',
}

const obj2 = {
    name: 'js',
}

console.log(obj1 == obj2); //false  왜? 각각 다른 메모리주소를 가지고있기 때문.
console.log(obj1 === obj2); //타입은 Object로 같지만, 값 자체가 서로다른 메모리 주소를 가르키고있으므로 다르다.
console.log(obj1.name == obj2.name); //true
console.log(obj1.name === obj2.name); //true

let obj3 = obj2; //동일한 메모리 주소를 가진다. 그리고 값도 똑같다.
console.log(obj3 == obj2); //true
console.log(obj3 === obj2); //true


