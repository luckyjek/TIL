// 콜백함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
console.log(add(2, 3))
console.log(multiply(2,3))

// 함수를 인자로받는 🔥 고차함수! 
// 전달된 action은 콜백함수이다.
// 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
// 함수를 가르키고 있는 함수의 레퍼런스(참조값)가 전달된다.
// 그래서 함수는 고차함수 안에서 `필요한 순간에 호출`이 나중에 된다.
function calculator(a, b, action){ // calculator를 정의하는 시점에는 action이 어떤 함수가 들어갈지 모른다. 외부에서 레퍼런스를 받아온다.
    if (a < 0 || b < 0) {
        console.log('그냥 return')
        return;
    }
    let result = action(a, b);
    return result;
}

calculator(-1, -1, add); // dd()라고 호출하지 않았으므로, 여기서 add가 선언된 참조값/주소값을 전달해준다.
calculator(1, 2, multiply);

// callback함수는 고차함수 내부에서 필요한 순간에 호출하고 싶을때, 호출해줄것이다.
// 그래서 언제 호출될지는 모른다. 
// 그래서 callback! 나중에 돌아와! 나중에 호출해줘! 이런느낌이다.