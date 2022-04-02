// 퀴즈!
let num = 2;
// num의 숫자가 짝수이면 👍🏻, 홀수라면 👎🏻을 출력하도록

// if
if(num % 2 === 0){
    console.log('짝수 맞아용 👍🏻');
}else{
    console.log('홀수 👎🏻');
}

// ternary 
// num % 2 === 0 ? console.log('짝수 맞아용 👍🏻'): console.log('홀수 👎🏻'); --console.log의 중복성을 없애자!

let emoji = num % 2 === 0 ? '짝수 맞아용 👍🏻' : '홀수 👎🏻';
console.log(emoji);


