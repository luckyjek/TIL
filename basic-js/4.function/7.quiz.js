// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함

// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두배값을 다 출력하고 싶음

// const printAll = (num) => {
//     if(num > 0){
//         for(let i = 0; i < num; i++){
//            console.log(i);
//         }
//     }else{
//         console.log('💩');
//     }
// }

// const printDouble = (num) => {
//     if(num > 0){
//         for(let i = 0; i < num; i++){
//            console.log(i * 2);
//         }
//     }else{
//         console.log('💩');
//     }
// }

// function iterate(max, action) {
//     let result = action(max)
//     return result;
// }

// iterate(0, printAll);
// iterate(0, printDouble);

// --------------------------
// 엘리쌤 솔루션

function interate(max, action){
    for(let i = 0; i < max; i++){
        action(i) //콜백함수
    }
}

function log(num){
    console.log(num);
}

function printDouble(num){
    console.log(num * 2);
}

// interate(3, log);
// interate(3, printDouble);

// 함수 호출시 위와같이 정의를 해도되고, 화살표함수를 이용해서 조금 더 간결하게도 작성한다.
interate(3, (num) =>  console.log(num)); 
interate(3, (num) => console.log(num * 2));


//point : 함수를 실행한 값을 전달하는 것이 아니라,
//함수 자체를 전달하기 때문에 setTimeout이라는 고차함수에 의해서,
//즉 time이 끝났을 때 setTimeout함수가 콜백함수를 실행해준다.
setTimeout(() =>{
    console.log('3초 뒤 함수 실행');
}, 3000)