// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌','🍓','🍇','🍓']
// output: ['🍌','🥝','🍇','🥝']

function replace(array, from, to){
    const replaced = Array.from(array);
    for(let i = 0; i < replaced.length; i++){
        if(replaced[i] === from){
            replaced[i] = to;
        }
    }
    return replaced;
}

const array = ['🍌','🍓','🍇','🍓'];
const result = replace(array, '🍓', '🥝');
console.log(result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아, 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: ['🍌','🥝','🍇','🥝'], '🥝'
// output: 2

function count(count, item) {
    let counter = 0;
    for(let i = 0; i < count.length; i++) {
        if(count[i] === item){
            counter ++;
        }
    }
    return counter;
}

// const array2 = ['🍌','🥝','🍇','🥝'];
// const result2 = count(array2 , '🥝');
const result2 = count(['🍌','🥝','🍇','🥝'], '🥝');
console.log(result2);

// 퀴즈3:
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝','🍇'],['🍌','🍓','🍇','🍓']
// output: ['🍌','🍇']

// function itemReturn(itemOne, itemTwo ){
//     let temp = [];
//     for(let i = 0; i < itemOne.length; i++){
//          temp.push(itemOne[i]);
//     }
//     return console.log(temp);
// }
// const array3 =  ['🍌', '🥝','🍇'];
// const array4 = ['🍌','🍓','🍇','🍓'];

// const result3 = itemReturn(array3, array4);
// console.log(result3);

function match(input, search) {
    const result = [];
    for(let i = 0; i < input.length; i++){
        if(search.includes(input[i])) {
            result.push(input[i]);
        }
    }
    return result;
}

console.log(match(['🍌', '🥝','🍇'], ['🍌','🍓','🍇','🍓']))