//------------------------------------------function C
function test(name) {
    console.log("나 들어옴");
    console.log(name);
}

test("elle");

//함수를 인자로 하여 함수를 호출
function hello(test) {
    //인자로 들어갈 '함수'를 callback이라고 해서 줄여서  c라고 하였다.
    console.log("hello");
    test();
}

hello(function () {
    console.log("콜백");
});

//함수를 호출하면 함수를 만들어서 리턴
function plus(base) {
    return function (num) {
        return base + num;
    };
}

const plus5 = plus(5);
console.log(plus5(10));

const plus7 = plus(7);
console.log(plus7(8));
//생성자 함수를 이용하여 새로운 객체를 만들어 내는 방법
function Person(name, age) {
    console.log(this);
    this.name = name;
    this.age = age;
}

const p = new Person("Mark", 37);
console.log(p, p.name, p.age);

const a = new Person("Anna", 26);

console.log(a, a.name, a.age);

const Cat = (name, age) => {
    console.log(this);
    this.name = name;
    this.age = age;
};

const c = new Cat("냥이", 1);
//------------------------------------------function B

//arrow함수를 만들어 이름이 hello1인 변수에 할당
const hello1 = () => {
    console.log("hello1");
};
//함수의 매개변수
//함수를 호출할 때 값을 지정

//매개변수가 하나일 때, 괄호 생략 가능

const hello2 = (name) => {
    console.log("hello2", name);
};

const hello3 = (name, age) => {
    console.log("hello3", name, age);
};

//함수의 리턴
//함수를 실행하면 얻어지는 값
const hello4 = (name) => {
    return `hello4 ${name}`;
};

const hello5 = (name) => `hello5 ${name}`;

// global.a = 0;
// {
//     const a = 1;

//     const test = new Function("return a");

//     console.log(test());
// }

// {
//     const a = 2;

//     const test = function () {
//         return a;
//     };

//     console.log(test());
// }

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
