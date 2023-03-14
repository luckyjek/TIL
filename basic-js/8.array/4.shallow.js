// 얕은 복사 Shallow Copy - 객체는 메모리 주소 전달
// 자바스크립트에서 복사 할 때는 항상 얕은 복사가 이루어짐!
// Array.from, concat, slice, spread(...), Object.assign
const pizza = {name: '🍕', price: 2, owner: {name: 'Ellie'} };
const ramen = {name: '🍜', price: 3};
const sushi = {name: '🍣', price: 1};

const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log('store1',store1);
console.log('store2',store2);

store2.push(sushi);
console.log('store1',store1);
console.log('store2',store2);

pizza.price = 4; // 가격인상 -> 이것이 바로 shallow copy이다.
console.log('store1',store1);
console.log('store2', store2);

// 4.function의 8.immutabilty.js 불변성에대해서 말하기