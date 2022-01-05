/**
 * 1. 원의 넓이를 구하는 공식
 * 2. PI정의
 * 3. 공식을 통해 결과 얻기
 *
 * const PI = 3.14; //상수값 PI정의
 * const getCircleArea = (r) => r * r * PI; //PI값을 이용하는 원의 공식 넓이에대한 함수 작성
 */

// const mathUtil = require("./mathUtil");
//우리가 실제로 PI값을 사용하고 있지 않으므로, 모든 값을 가지고 있는 객체를
//가져올 필요는 없다. 그래서 Destructuring으로 함수만 가져온다.

// const { getCircleArea } = require("./mathUtil");
import { getCircleArea } from "./mathUtil";
// import mathUtil from "./mathUtil";

const result = getCircleArea(2);
// const result = mathUtil.getCircleArea(2);
console.log(result);
