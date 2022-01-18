//------------------------------------------function B
global.a = 0;
{
    const a = 1;

    const test = new Function("return a");

    console.log(test());
}

{
    const a = 2;

    const test = function () {
        return a;
    };

    console.log(test());
}

//new Function(/*인자1, 인자2, ..., 함수의 바디 */)
// console.log(sum(1, 2, 3)); //error
// const sum = new Function("a", "b", "c", "return a+b+c");
// console.log(sum(1, 2, 3));

//------------------------------------------function A
// var hello2;
// console.log(hello2);

// hello1();
// hello2();
// hello3();

//선언적방식의 함수이용시, 어디있던지간에 자바스크립트 특성상  함수를 먼저 메모리에 올라가진다
// function hello1() {
//     console.log("hello1");
// }

// var hello2 = function () {
// hello2 = function () {
//     console.log("hello2");
// };

// const hello3 = function () {
//     console.log("hello3");
// };

//function
//이름이 hello1인 함수를 선언
// const hello1 = function () {
//     console.log("hello1");
// };

// console.log(hello1, typeof hello1);
//함수의 매개변수
//함수를 호출할 때 값을 지정
// const hello2 = function (_name) {
//     console.log("hello2", _name);
// };

//함수의 리턴
//함수를 실행하면 얻어지는 값
// const hello3 = function (_name) {
//     return `hello3 ${_name}`;
// };

//function
//이름이 hello1인 함수를 선언
// function hello1() {
//     console.log("hello1");
// }
// console.log(hello1, typeof hello1);

//함수의 매개변수
//함수를 호출할 때 값을 지정
// function hello2(name) {
//     console.log("hello2", name);
// }

// hello2("test");
//함수의 리턴
//함수를 실행하면 얻어지는 값
// function hello3(name) {
//     return `hello3 ${name}`;
// }

// console.log(hello3("Elin"));
