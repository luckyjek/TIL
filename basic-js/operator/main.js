//1. String concatenation
console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals:1+1=${1 + 2}`);

//2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder /나누고 나머지 값
console.log(2 ** 3); //exponentiation 2의 3승

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1 ;
// preIncrement = counter;
console.log(`preIncrement:${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
//postIncrement = counter;
//counter = counter + 1;
console.log(`preIncrement:${postIncrement}, counter: ${counter}`);
//4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x * y;
x /= y;

//5. Comparison operators
//console.log(10 < 6); //less than
//console.log(10 <= 6); //less than or equal
//console.log(10 > 6); //greater than
//console.log(10 >= 6); //greater than or equal

//6. Logical operators: ||(or), &&(and), !(not)
const value1 = true;
const value2 = 4 < 2;

//|| (or), finds the first truthy value
console.log(`or:${value1 || value2 || check()}`);

//&& (and), finds the first falsy value
console.log(`and:${value1 && value2 && check()}`);

//often used to compress long if-statemnet
//nullableObject && nullableObject.something
// if (nullableObject != null) {
//     nullableObject.something;
// }

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log("😥");
    }
    return true;
}

//!  (not)
//console.log(!value1);

//7. Equality
const stringFive = "5";
const numberFive = 5;

//== loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

//== strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); //false
console.log(ellie1 === ellie2); //false
console.log(ellie1 === ellie3); // true

//equality - puzzler
console.log(0 == false); //true
console.log(0 === false); //false
console.log("" == false); //true
console.log("" === false); //false
console.log(null == undefined); //true
console.log(null === undefined); //false

//8.Conditional operators:if
//if, else if, else
const _name = "df";
if (_name === "ellie") {
    console.log("Welcome, Ellie!");
} else if (_name === "coder") {
    console.log("You are amazing coder!");
} else {
    console.log("unkwnon");
}

//9.Ternary operator:?
//condition ? value1:value2;
console.log(_name === "ellie" ? "yes" : "no");

//10.Switch statement
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in TS
const browser = "IE";
switch (browser) {
    case "IE":
        console.log("go away!");
        break;
    case "Chrome":
    case "Firefox":
        console.log("love you!");
        break;
    default:
        console.log("same all!");
        break;
}

//만약 if문에서 너무 if-else if 를 반복한다면,switch를 사용하는것을 고려하는
//것이 좋고, 나중에 typescript에서 정해져있는 type을 검사하거나
//enum 비슷한 애들을 검사할때는 switch를 사용하는 것이 가독성에 좋다.

//---------------------------------------------------------------------book
// function fact(n) {
//     if (n <= 1) return n;
//     return n * fact(n - 1);
// }

// for (var i = 1; i < 10; i++) {
//     document.write(i + "i=" + fact(i) + "<br/>");
// }

// var obj = {};
// obj[Symbol("heart")] = 3;
// console.log(obj);
