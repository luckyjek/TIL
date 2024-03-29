const PI = 3.14; //상수값 PI정의
const getCircleArea = (r) => r * r * PI; //PI값을 이용하여 원의 공식 넓이를 구하는공식 함수 작성

//module객체를 활용해서 commonjs로 모듈객체를 다루는 부분 , 기능을 내보내는 부분
// module.exports = {
//     PI,
//     getCircleArea,
// };

//exports라는 키워드를 이용해서 개별적으로 내보낼 수 있다.

// exports.PI = PI;
// exports.getCircleArea = getCircleArea;

// esm module <------------------------------------------------
export { PI, getCircleArea };
// export default { PI, getCircleArea };
