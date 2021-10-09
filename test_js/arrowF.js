// 화살표 함수 표현식
// var simpleAdd = function (x1, x2) {
//     return x1 + x2;
// };
// console.log("simpleAdd: " + simpleAdd(3, 3)); //6

// function add(x1, x2) {
//     return x1 + x2;
// }
// console.log("add :" + add(3, 3)); //6

//------------------------------------------------------------------

// basic
// var simpleAdd = function (x1, x2) {
//     return x1 + x2;
// };

//remove 'function', 'return' &&  add '=>'
// var arrowAdd1 = (x1, x2) => {
//     return x1 + x2;
// };

// console.log("arrowAdd1 :" + arrowAdd1(3, 2));
// var arrowAdd2 = (x1, x2) => x1 + x2;
// console.log("arrowAdd2 :" + arrowAdd2(3, 2));

//-----------------------------------------------------------------
//Rest PARAMETERS(added in ES6) ...배열 형태로 전달된다.
// function add(...nums) {
//     var sum = 0;

//     for (var n of nums) {
//         sum += n;
//     }

//     return sum;
// }

// const sumAgain = sum;
// console.log(sumAgain(1, 3));

//add eunkyung
// function printAll(...args) {
//     for (let i = 0; i < args.length; i++) {
//         console.log(args[i]);
//     }

//     for (const arg of args) {
//         console.log(arg);
//     }

//     //use array
//     args.forEach((arg) => console.log(arg));
// }
// console.log(printAll("dream", "coding", "ellie"));

// namePrint(); //호이스팅OK
// function namePrint() {
//     //anonymous function
//     console.log("print");
// }

// const print = function () {
//     //anonymous function
//     console.log("print");
// };

// print(); //print
// const printAgain = print;
// printAgain(); //print
//-----------------------------------------------------------------
// Callback function using function exprssion
//함수를 전달해서, 너가 상황에 맞으면 너가원하면 너가 전달된 함수를 불러!?
//2가지의 callback function's가 파라미터로 전달되어서 각각 맞는 콜백 함수를 부른다.
// function randomQuiz(answer, printYes, printNo) {
//     if (answer === "love you") {
//         printYes();
//     } else {
//         printNo();
//     }
// }

// const printYes = function () {
//     console.log("yes!");
// };
// const printNo = function () {
//     console.log("no!");
// };

// randomQuiz("wrong", printYes, printNo);
// randomQuiz("love you", printYes, printNo);
//-----------------------------------------------------------------
// const simplePrint = function () {
//     console.log("simplePrint!");
// };
// simplePrint();
// const simplePrint2 = () => console.log("simplePrint2");
// simplePrint2();

// const add = (a, b) => a + b;
// console.log(add(3, 2));

// const add2 = function (a, b) {
//     return a + b;
// };

// console.log(add2(2, 7));

const simpleMultiply = (a, b) => {
    //함수안에서 조금 더 다양한 일들이 필요해서
    //블럭이 필요하다면, { } 를 쓰고 , 꼭 return을 이용하여 값을 처리해줘야한다.
    return a * b;
};
console.log(simpleMultiply(4, 3));
