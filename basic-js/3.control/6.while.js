// while(조건) {}
// 조건이 false가 될때까지 {} 코드를 반복 실행
let num = 5;
while(num >= 0){
    console.log(num);
    num--;
}

let isActive = false;
let i = 0;
while (isActive){
    console.log('아직살아있다!');
    if(i === 10){
        break;
    }
    i++; //이거 없으면 무하루프 걸린다.
}

// 꼭 한 번은 무조건 실행해야된다면? do-while문
do{
    console.log('do-while 아직 살아있다!');
}while (isActive);

