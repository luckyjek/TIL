// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
"use strict";

// 2. Variable, rw(read/write) ->즉, 메모리에 읽고 쓰는게 가능하다
// let (added in ES6)
let globalName = "global name";
{
    let _name = "ellie";
    console.log(_name);
    _name = "hello";
    console.log(_name);
}
// console.log(_name);
console.log(globalName);
// var(dont't ever use this!)
// var hoisting(move declaration from bottom to top)
// 즉, 어디에 선언했느냐에 상관없이 항상 제일 위로 선언을 끌어올려주는 것을 말한다.
{
    age = 4;
    var age;
}

console.log(age);

//3. Constant  r(read only) -> 즉, 읽는 것만 가능하다. 따라서 const를 선언함과 값을 할당한 이후는 읽기만가능.
//favor immutable data type always for a few reasons;
// - security
// -thread saffety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

//Note! dataType에는 2가지(Immutable data types AND Mutable data types)가 있다.
//Immutable data types: primitive types, frozen objects (i.e. object.freeze())
//Mutable data types:all objects by default are mutable in JS
//favor immutable data type always for a few reasons:
// -security
// -thread safety
// -reduce human mistakes

//4. Variable types (데이터 타입)
//❗ primitive ->value(값) 자체가 메모리에 저장된다
//(더 이상 작은 단위로 나뉘어질수없다.), single item: number, string, boolean, null, undefiend, symbol

// object -> ❗너무 커서 메모리에 한번에 다 올라갈 수가 없다. 따라서 처음 가르키는 곳에는 ref(참조)가 있고,
//❗실제로 Object를 가르키고 있는 곳이다. 그래서 이 ref를 통해서 실제로 object가 담겨있는 메모리를 가르키게된다.
//(single item들을 여러개 묶어서 한 단위로 / 한 박스로 관리할 수 있게해준다.), box container
// function(JS에서 function은 데이터 타입중 하나이다.), first-class function
const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value:${count},type:${typeof count}`);
console.log(`value:${size}, type:${typeof size}`);

//number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0; //무한대의 숫자가 나올경우 infinity
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; //over (-2**53) ~ (2*53)
console.log(`value:${bigInt}, type:${typeof bigInt}`);

//string
const char = "c";
const brendan = "brendan";
const greeting = "hello" + brendan;
console.log(`value:${greeting}, type:${typeof greeting}`);
const helloBob = `hi${brendan}!`; //template literals (string)
console.log(`vlaue:${helloBob}, type:${typeof helloBob}`);

//boolean
//false: 0, null, undefined, NaN, ''
// true: any other value

const canRead = true;
const test = 3 < 1; // false
console.log(`value:${canRead}, type:${typeof canRead}`);
console.log(`value:${test}, type:${typeof test}`);

//null --내가 지정해준 null값
let nothing = null;
console.log(`value:${nothing}, type:${typeof nothing}`);

//undefined -- 지정해주지않았다.
let x;
console.log(`value:${x}, type:${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); //true
console.log(`value:${symbol1.description}, type:${typeof symbol1}`);

//object, real-life object, data structure
//일상생활에서 보는 물건과 물체들을 대표할 수 있는 Box형태를말한다.
const ellie = { name: "ellie", age: 20 };
//const - > ellie가 가르키는 메모리의 포인터는 잠겨있어서 다른object로 할당이 불가능하지만,
//ellie Object안에는 name이랑 age라는 변수들이 존재한다. 그래서,
//ellie.name
//ellie.age 라고하면 각각 포인터가 가르키고있는 메모리에 다른 값으로 할당이 가능하다.
ellie.age = 21; // 그래서 const지만 아래 포인터 가르키기있는게 달라서 변경이 가능한것이다.

// 5. 자바스크립트의 하이라이트!
// Dynamic typing : dynamically typed language ( 즉, 선언할때 어떤 타입인지 선언하지 않고, Runtime프로그램이 동작할때
//할당된 값에 따라서 타입이 변경될 수 있다는 것을 말한다.)

let text = "hello";
console.log(text.charAt(0)); //h
console.log(`value:${text},type:${typeof text}`);
text = 1;
console.log(`value:${text}, type:${typeof text}`);
text = "7" + 5;
console.log(`value:${text}, type:${typeof text}`);
text = "8" / "2";
console.log(`value:${text}, type:${typeof text}`);
console.log(text.charAt(0)); //위에서 숫자로 바뀌었다. 그런데 변수명때문에 개발자가
// string이라고 인식해서 함수를 부르게되면, error가 생긴다.
// 따라서 JS는 Runtime에서 type이 정해지기 때문에 이것때문에 error가 runtime으로 발생하는 경우가 굉장히 많다.

// 그래서! TS가 나오게됐다! JavsScript위에 Type이 더 올려진 언어이다.
