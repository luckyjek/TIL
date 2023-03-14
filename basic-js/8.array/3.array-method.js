// 배열의 함수들 
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지
console.clear();
const fruits = ['🍌','🍎','🍋'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// 특정한 아이템의 위치를 찾을때
console.log(fruits.indexOf('🍎'));

// 배열안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('🍎'));

// 추가 - 제일 뒤
let length = fruits.push('🍑'); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(length);

// 추가 - 제일 앞
length = fruits.unshift('🍓'); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(length);

// 제거 - 제일 뒤
let lastItem = fruits.pop(); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(lastItem);

// 제거 - 제일 앞
lastItem = fruits.shift(); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(lastItem);

// 중간 추가 또는 삭제
const deleted = fruits.splice(1, 1);
console.log(fruits); // 배열 자체를 수정(업데이트)
console.log('delete: ', deleted);
fruits.splice(1, 1, '🍎', '🍓'); // 배열의  0, 1 <- 1번째부터
console.log(fruits); // 배열 자체를 수정(업데이트)

// 잘라진 새로운 배열을 만듬
let newArr = fruits.slice(0,2);
console.log(newArr);
console.log(fruits);

newArr = fruits.slice(-1);
console.log(newArr);

// 여러개의 배열을 붙여줌 
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log('arr1',arr1);
console.log('arr2',arr2);
console.log('arr3', arr3);

// 순서를 거꾸로 
const arr4 = arr3.reverse();
console.log(arr4);
console.clear();

// 중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
    [1, 2, 3],
    [2, [5, 6, [3, 4]]],
];
console.log(arr);
console.log(arr.flat(3)); // () 에 넣는 숫자에 따라 몇 단계까지 풀어줄건지 지정 할 수 있다.
arr = arr.flat(3)

// 특정한 값으로 배열을 채우기
arr.fill(0); //배열 자체를 수정
console.log(arr);

arr.fill('s', 1, 3);
console.log(arr);

arr.fill('a', 1);
console.log(arr);

// 배열을 문자열로 합하기
let text = arr.join(); //배열안에 있는 모든 것들이 자동으로 ,를 이용해서 문자로 변환됐다. 
console.log('end text :',text);

text = arr.join('| '); // ,가 아닌 다른 문자열로 합치고싶을때 ('|') 와같이 써주면된다.
console.log('end text :',text);
