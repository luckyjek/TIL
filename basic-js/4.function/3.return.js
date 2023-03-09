//return을 명시적으로 하지 않으면 자동으로 undefined이 반환됨!
function add(a,b){
    // return a + b;
    return undefined;
}

const result = add(1,2);
console.log(result);

//-------------------------------

// return을 함수 중간에 하게 되면 함수가 종료됨
// 사용예: 조건이 맞지 않는 경우, 함수 도입부분에서 함수를 일찍이 종료함.
function print(num){
    // if(num < 0){
    //     return;
    // }
    console.log(num);
}
print('text');

print(12); //12 즉, 0이 아닌경우만 출력
print(-12); //0 보다 작은경우 함수를 종료

//-------------------------------

function print(string) {
	console.log(string);
	// return undefined; 생략
}

//print('text'); // text

const outcome = print;
//const outcome = print('hihihi text'); // hihihi text
console.log('outcome', outcome('text'));