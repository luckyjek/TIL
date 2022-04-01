//MDN 연산자 우선순위: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
let a = 2;
let b = 3;
let result = ((a + b) * 4) / 5;

console.log(result); //14
         // 2 + 3 * 4 
result = a++ + b * 4; //여기서 증가 연산자는 나중에 계산되는 증감연산자! 
console.log(result); //14