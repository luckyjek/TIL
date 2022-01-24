const alphabets = ["a", "a", "a", "b", "c", "c", "d", "e"];
const counts = alphabets.reduce((acc, current) => {
    //만약에 acc안에있는 current가 존재하는지 확인한다.
    //이 말이 무슨말이냐하면 acc[current]-> acc['a'] ->acc.a
    if (acc[current]) {
        acc[current] += 1;
    } else {
        acc[current] = 1;
    }
    return acc;
}, {}); //숫자 0이 아닌, 객체{} 를 넣어주었다.

console.log(counts);
// const numbers = [1, 2, 3, 4, 5];

// const avg = numbers.reduce((accumulation, current, index, array) => {
//     if (index === array.length - 1) {
//         //현재 처리하고있는 원소가 맨 마지막꺼라면 5-1=
//         return (accumulation + current) / array.length;
//     }
//     return accumulation + current;
// }, 0);
// console.log(avg);

// let sum = 0;
// numbers.forEach((n) => {
//     sum += n;
// });

// console.log(sum);

// const array = [1, 2, 3, 4, 5];
// console.log(array.join());
// console.log(array.join(" ")); //<-파라미터로 separator를 넣어줄수도있다. 어떻게 구분할 것인가?를 넣어줄 수 있다.
// console.log(array.join(", "));

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const concated = arr1.concat(arr2);

// console.log(arr1);
// console.log(arr2);
// console.log(concated);
// const numbers = [10, 20, 30, 40];
// numbers.unshift(0);
// console.log(numbers); //[ 0, 10, 20, 30, 40 ]
// const value = numbers.shift();
// console.log(numbers); //[ 10, 20, 30, 40 ]

// const value = numbers.shift();

// numbers.shift();
// numbers.shift();
// numbers.shift();
// console.log(value); //10
// console.log(numbers); //[ 40 ]

// const sliced = numbers.slice(0, 2);
// console.log(sliced); //[ 10, 20 ]
// console.log(numbers); //[ 10, 20, 30, 40 ]

// const numbers = [10, 20, 30, 40];
// const index = numbers.indexOf(30);
// const spliced = numbers.splice(index, 2);

// console.log(spliced); //[ 30, 40 ]
// console.log(numbers); //[ 10, 20 ]
// const todos = [
//     {
//         id: 1,
//         text: "자바스크립트 입문",
//         done: true, //했는지안했는지
//     },
//     {
//         id: 2,
//         text: "함수 배우기",
//         done: true, //했는지안했는지
//     },
//     {
//         id: 3,
//         text: "객체와 배열 배우기",
//         done: true, //했는지안했는지
//     },
//     {
//         id: 4,
//         text: "배열 내장함수 배우기",
//         done: false, //했는지안했는지
//     },
// ];

// const tasksNotDone = todos.filter((todo) => !todo.done);
// console.log(tasksNotDone);
// const index = todos.indexOf(3);
// console.log(index);

// const todo = todos.find((todo) => todo.done === false);
// console.log(todo);

//---------------------------------------
// const superheroes = ["아이언맨", "캡틴 아메리카", "토르", "탁터 스트레인지"];

// const index = superheroes.indexOf("토르");
// console.log(index); // 2
//---------------------------------------
// const items = [
//     {
//         id: 1,
//         text: "hello",
//     },
//     {
//         id: 2,
//         text: "bye",
//     },
// ];

// const texts = items.map((item) => item.text);

// console.log(texts);
//-------------------------------------------------
// const array = [1, 2, 3, 4, 5, 6, 7, 8];

// //만약 위의 배열안에있는 모든 숫자를 제곱해서 새로운 배열을 만들고싶다면 ?

// // const squared = [];

// //방법 1.
// // for (let i = 0; i < array.length; i++) {
// //     squared.push(array[i] * array[i]);
// // }
// //방법 2.
// // array.forEach((num) => {
// //     squared.push(num * num);
// // });

// //방법 3.
// const square = (n) => n * n;
// const squared = array.map(square);

// //방법 4. --위의 코드에서 함수 자체를 map안에 넣은것이다.
// const squared = array.map((n) => n * n);
// console.log(squared);
