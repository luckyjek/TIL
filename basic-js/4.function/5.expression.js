// 1. 함수 선언문 function name() { }
// 2. 함수 표현식 const name = funciton () { }
 
// let add = function sum(a, b){ -> console.log(sum(1,2)); 호출할 경우, sum은 정의되어있지않다.
//즉, 표현식으로 된 함수는 익명함수를 사용하는데, 변수 이름을 적어 줄 수 있는 있지만, 
//외부에서 접근할 수 없으므로 보통 생략하고 작성한다.
//그래서 항상 add라는 이름을 이용해서 호출한다.

let add = function (a, b){
    return a + b;
}
console.log(add(1, 2));

// 3. 화살표 함수 const name = () => { }
add = (a, b) => {
    return a + b;
};
console.log(add(1, 2));

// 4. 생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸

// 5. IIFE (Immediately-Invoked Function Expressions)
(function run(){
    console.log('🥰');
})();