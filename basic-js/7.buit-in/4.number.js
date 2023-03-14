const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1);
console.log(typeof num2);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

if ( num1 === Number.MAX_VALUE ){

}
// if ( num1 === Number.NaN ){
if ( Number.isNaN(num1) ){

}

// 지수표기법 (매우 크거나 작은 숫자를 표기할때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential());

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());

console.log(num4.toString());
console.log(num4.toLocaleString('ar-EG'));

// 원하는 자리수까지 유효하도록 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(2)); // 전체자리수가 표기가 안될때는 지수표기법으로 반환

console.log('Number.EPSILON : ',Number.EPSILON);
if(Number.EPSILON > 0 || Number.EPSILON < 1) {
    console.log(Number.EPSILON); //0과 1사이에서 나타낼 수 있는 가장 작은 숫자
}

const num = 0.1 + 0.2 - 0.2; //?
console.log(num);//0.1 오잉? 0.10000000000000003 이 나온다. 

function isEqual(original, expected) {
    // return original === expected;
    // return original - expected < Number.EPSILON;

    // 결론 : js에서 실수끼리 계산을 할 때 예상하지못한 작은 미묘한 차이가 발생 할 수 있다.
    //       이를 감지하려면, epsilon을 사용하면된다.
    return Math.abs(original - expected) < Number.EPSILON; 
}

console.log(isEqual(1,1));
console.log(isEqual(0.1, 0.1));
console.log(isEqual(num, 0.1));