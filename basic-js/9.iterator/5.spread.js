// Spread 연산자, 전개구문
// 모든 Iterable은 Spread 될 수 있다.
// 순회가 가능한 모든 것들은 최르르륵 펼쳐 질 수 있다
// func(...iterable)
// [...iterable]
// {...obj}
// EcmaScript 2018

function add(a, b, c){
    return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(...nums));

// Rest parameters
function sum(first, second, ...nums) {
    console.log(first, second, nums);
}
sum(1, 2, 0, 1, 2, 4);

// Array Concat
const fruits1 = ['🍏', '🥝'];
const fruits2 = ['🍓', '🥝'];
let arr = fruits1.concat(fruits2);
// console.log(arr);
arr = [...fruits1, '🍋' ,...fruits2];
// console.log(arr);
console.clear();
console.log('-------------------');
// Object 
const elin = {name: 'Elin', age: 3, home: {address: 'home'}};
console.log(elin); //{ name: 'Elin', age: 3, home: { address: 'home' } }

const updated = {
    ...elin,
    job:'s/w engineer',
}
updated.home.address='shcool'; 
console.log(updated);
console.log(elin); //{ name: 'Elin', age: 3, home: { address: 'shcool' } }

