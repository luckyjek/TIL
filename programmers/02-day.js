// Day 2 사칙연산, 조건문, 배열
// function solution(num1, num2) {
//   const reault = (num1 / num2) * 1000
//   return Math.floor(reault);
// }

// console.log(solution(7, 3))

function solution(num1, num2) {
  let result = 0;
  if (num1 === num2) {
    result = 1;
    return result;
  }
  else { 
    result = -1;
    return result;
  }
}
console.log(solution(3,4))