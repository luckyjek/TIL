const a = Symbol();
const b = Symbol(37);
const c = Symbol("Mark");
const d = Symbol("Mark");

console.log(a, typeof a);
console.log(c === d); //false 즉, 만들어진 심볼은 고유한 것을 의미한다. 따라서 같지않다.

//new Symbol(); //Symbol is not a constructor 즉, Symbol은 생성자함수로 사용할 수 없다.
//----------------------------------------------------------------------String
// const a = "Mark";
// console.log(a, typeof a);

// const b = "Mark" + "Lee";
// const c = a + " Lee";
// console.log(c, typeof c);

// const d = `${a} Lee`;
// console.log(d, typeof d);
//----------------------------------------------------------------------Number

// const a = 37;
// console.log(a, typeof a);
// const b = 96.7;
// console.log(b, typeof b);
// const c = NaN;
// console.log(c, typeof c);
// const d = Number("Mark");
// console.log(d, typeof d);
// const e = Number("37");
// console.log(e, typeof e);
//----------------------------------------------------------------------Null / Undefined

//Null Type
//const a = null; //값으로 소문자 null이라고 작성하게되고, type은 대문자로 Null이다.
//console.log(a, typeof a); //null object 즉, 값이없는 Object를 의미한다.
//Undefined Type

//let b;

//console.log(b, typeof b);

//if (a == b) {
//    console.log(a == b); //true
//}

//if (a === b) {
//정확하게 구분을 해주기위해서  ===을사용한다.값 뿐만아닌, 타입까지 정확하게 비교를 해준다.
//    console.log(a === b);
//}
//console.log("chc");

// const isTrue = true;
// const isFalse = false;

// console.log(isTrue, typeof isTrue);
// console.log(isFalse, typeof isFalse);

//new연산자를 사용해서 만들었다
//
// const a = new Boolean(false);
// console.log(a, typeof a);
//[Boolean: false] object
// -> 많이 사용하지않는다. 왜?
//직관적으로 true / false를 사용하는경우
//조건문안에 ture인지 false인지를 평가해서 조건문안에 사용하게되는데,
// if (a) {
//     console.log("false?");
// }
//처음에 Boolean에 초기값으로 false라는 거짓값을 넣었는데,
//a는 object인데, 객체는 조건문안에서 평가될때 true로 평가가된다. 그래서 조건문안에가 실행이된다
//그래서 false지만, if문안에서 실행되기때문에 헷갈릴수가 있다. 따라서 보통 이렇게 사용하지않는것이다.

// const b = Boolean(false);
// console.log(b, typeof b);

// if (b) {
//     console.log("false?");
// }
// console.log("end");
