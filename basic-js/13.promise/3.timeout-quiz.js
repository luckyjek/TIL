// 주어진 seconds(초)가 지나면 callback함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자! 
// function runInDelay(callback, seconds){
//     if(!seconds || seconds < 0) {
//         throw new Error('0 보다 크게 입력해주세요.');
//     }
    
//     callback(()=>{
//         console.log('hi');
//     },seconds*1000);
// }

runInDelay(setTimeout, 3);

function runInDelay(callback, seconds) {
    if(!callback) {
        throw new Error('callback함수가 없어요~');
    }
    if(!seconds || seconds < 0){
        throw new Error('seconds는 0보다 커야 함');
    }
    setTimeout(callback, seconds * 1000);
}

try{
    runInDelay(()=>{console.log('타이머완료!')}, 1);
}catch(error){
// 강제 종료가 되지 않도록 처리
}