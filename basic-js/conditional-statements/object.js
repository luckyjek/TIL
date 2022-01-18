//표준 내장 객체 : Array

const a = new Array("red", "black", "white"); //Array객체를 생성자 함수를 사용하여 표현하였다.

console.log(a, typeof a); //[ 'red', 'black', 'white' ] object -> 요소가 들어있기에 대괄호로 나오지만 이것또한 객체이다.
console.log(a instanceof Array);
console.log(a instanceof Object);

//표준 내장객체인 Array로 new를 하는 것 말고도 배열에서는
//'리터럴'로 사용이 가능하다
//a의 결과가 [] 대괄호를 통해서 요소의 반복으로 되어있듯이 마찬가지로
//문자 그대로 쓰는 방법인 '리터럴 표현법'으로 만들어 줄 수 있다.
const b = ["red", "black", "white"];
console.log(b, typeof b);
console.log(b instanceof Array);
console.log(b instanceof Object);

//따라서 Array가 가지고있는 prototype함수를 사용할 수 있는것이다.
//즉 ,
console.log(b.slice(0, 1)); //Array에 있는 프로토타입 체인에 들어있는 함수를 사용할 수 있다.
//위와같이 [ 'red' ]로 나온다는 것은 Array.prototype.slice 라는 함수가 있는것이므로 당연히 이 함수는
//Array에서 사용되는 것이고, Array가 만들어놓은 프로토타입 함수이다.
//따라서 아래의 .console.log결과값을 보면,
console.log(Array.prototype.slice, Object.prototype.slice);
//Array.prototype.slice ->
//Object.prototype.slice ->
//----------------------------------------------------------------------------------------------
// 객체 리터럴

// const a = {};

// console.log(a, typeof a); //{} object

// const b = {
//     name: "Mark",
// };

// console.log(b, typeof b); //{ name: 'Mark' } object

// const c = {
//     name: "Mark",
//     hello1() {
//         console.log("hello1", this.name);
//     },
//     hello2: function () {
//         console.log("hello2", this.name);
//     },
//     hello3: () => {
//         console.log("hello3", this.name); //undefined 왜냐면 arrow function사용시, this가 안된다.
//     },
// };

// c.hello1();
// c.hello2();
// c.hello3();
//-----------------------------------------------------------------------------------------------
//prototype 상속

//부모객체
// function Person() {}

// Person.prototype.hello = function () {
//     console.log("hello");
// };

// //자식객체
// function Korean(region) {
//     this.region = region;
//     this.where = function () {
//         console.log("where", this.region);
//     };
// }

// Korean.prototype = Person.prototype; //부모객체를 자식의 객체 어딘가에 property로 할당하는방법은 prototype을 잘 활용하는 방법이다.

// const k = new Korean("Seoul");

// k.hello();
// k.where();

// console.log(k instanceof Korean);
// console.log(k instanceof Person);
// console.log(k instanceof Object);

//prototype
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// this.hello = function () {
//     console.log("hello", this.name, this.age);
// };
// }

// Person.prototype.hello = function () {
//     console.log("hello", this.name, this.age);
// };

// console.log(Person.prototype.hello);

// const p = new Person("Mark", 37);

// console.log(p.name);
// console.log(p.age);
// console.log(p.hello());
// console.log("herehereherehereherehere");
// p.hello();
// console.log(p.toString); //내가 만들지않았지만 존재함

// console.log(Person.prototype);
// console.log(Person.prototype.toString);
// console.log(Person.prototype.constructor); //Pserson함수 그 자체를 의미

// console.log(Person.hello); //객체로 생성되야지 hello함수를 사용할 수 있으므로 undefined가 뜬다.
// console.log(Person.prototype.hello);
//그래도 undefined가 뜬다. 왜냐면 prototype에 hello가 있는게 아니라,
//객체가 만들어지고, 그 객체에 바로 property로 할당되었기때문에  prototype은 더 안쪽에있는 무언가 인 것이다.
//따라서 10번째 줄같이 작성 가능하다

// console.log(Object.prototype);
// console.log(Object.prototype.toString);
// console.log(Object.prototype.constructor);

// console.log(p instanceof Person);
// console.log(p instanceof Object);

//new Object
// const a = new Object();

// console.log(a, typeof a);

// const b = new Object(true);
// console.log(b, typeof b);

// const c = new Object({ name: "Mark" });
// console.log(c, typeof c);

//-----------------------------------------------------------------------------------------------
//값을 속성으로 넣기
// function A() {
//     this.name = "Mark"; // {} <- 중괄호 영역 이 객체를 의미하는것이 생성자 함수 속에서는 this이다.
// }
// const a = new A(); //{name:'Mark'}
// console.log(a);
// console.log(a.name);

//함수를 속성으로 넣기
// function B() {
//     this.hello = function () {
//         console.log("hello");
//     };
// }

//(new B()).hello();
// new B().hello();

//new Function() --즉 생성자 함수이며, 표준 내장 객체라 한다.

//------------------------------------------------------------------------------------
//생성자 함수

// function A() {}

// const a = new A();
// console.log(a, typeof a);

//new를 붙이지않고, 함수를 실행시 생성자 함수가 아니므로,A()를 통해 객체를 만들어내는게아닌,
//A라는 함수를 그냥 실행하고 그 return값을가져오게되는데 지금은 return이 없기 때문에 undefined라고 뜨는것이다.
// console.log(A());

//생성하면서 데이터 넣기
// function B(name, age) {
//     console.log(name, age);
// }

// const b = new B();
// const c = new B("Mark", 37);
// console.log(B());
