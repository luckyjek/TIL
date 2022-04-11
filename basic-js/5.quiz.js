// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌','🍓','🍇','🍓']
// output: ['🍌','🥝','🍇','🥝 ']

// for(let i = 0; i < array.length; i++){
//     if(array[i] === '🍓'){
//         delete '🍓'
//         array.push('🥝 ');
//     }
// }

function replace(array) {
    const replaced = Array.from(array);
    for(let i = 0; i < replaced.length; i++){
        if(replaced[i] === '🍓'){
            replaced[i] = '🥝 '
        }
    }
    return replaced;
}
const array = ['🍌','🍓','🍇','🍓'];
const result = replace(array);
console.log(result);