// Spread 연산자, 전개구문
// 모든 Iterable은 Spread 될 수 있다.
// 순회가 가능한 모든 것들은 최르르륵 펼쳐 질 수 있다
// func(...iterable)
// [...iterable]
// {...obj}
// EcmaScript 2018 도입됨.

function add(a, b, c){
    return a + b + c;
}

const nums = [1, 2, 3];
console.log('촤르륵',nums[0], nums[1], nums[2]); //촤르륵 1 2 3 
console.log(add(...nums)); // 배열을 하나하나씩 펼쳐서 전달가능

// Rest parameters
function sum(first, second, ...nums) {
    console.log('Rest parameters:', first, second, nums);  // 배열을 받아올 수도있다.
}
sum(1, 2, 0, 1, 2, 4);

console.clear();

// Array Concat
const fruits1 = ['🍏', '🥝'];
const fruits2 = ['🍓', '🥝'];
let arr = fruits1.concat(fruits2);
console.log('concat:', arr);

arr = [...fruits1, '🍋' ,...fruits2];
console.log('[] array:',arr);

console.log('-------------------');

console.clear();

// Object 
const ellie = { name: 'Ellie', age: 20 }
const updatedObj = {
    ...ellie,
    job: 's/w enginner'
}
console.log('updatedObj:',updatedObj);
console.log('ellie:', ellie);

console.clear();

// 얕은 copy가 된다는것 확인하기
const elin = {name: 'Elin', age: 3, home: {address: 'home'}};
console.log('얕은 copy', elin); //{ name: 'Elin', age: 3, home: { address: 'home' } }

const updated = {
    ...elin,
    job:'s/w engineer',
}

console.log('얕은 copy이후:',updated);

console.log('updated.home.address:',updated.home.address);
updated.home.address = 'shcool'; 
console.log('updated.home.address:',updated.home.address);
console.log(updated);
console.log(elin); //{ name: 'Elin', age: 3, home: { address: 'shcool' } }

