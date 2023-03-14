// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]
function replace(array) { 
  // 교체된 새로운 배열을 만들어, 리턴해야된다. -> 주어진 배열을 함수안에서 수정하면 절대 안됨!
  const replaced = Array.from(array); // 새로운 배열을 만들었으므로 이 배열을 수정하면된다.
  for (let i = 0; i < replaced.length; i++) { 
    if (replaced[i] === '🍓') { 
      replaced[i] = '🥝'
    }
  }
  return replaced;
}
const array = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(array);
console.log(result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
function count(array, item) { 
  let count = 0;
  for (let i = 0; i < array.length; i++) { 
    if(array[i] === item) {  //index에 있는 요소와 외부로부터 확인받고싶은 item과 같다면
      count++;
    }
  }
  return count;
}
console.log(count(['🍌', '🥝', '🍇', '🥝'], '🥝')); //특정한요소 === item

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]
function match(input, search) { 
  let result = [];

  for (let i = 0; i < input.length; i++) { 
    if (search.includes(input[i])) {
      result.push(input[i]);
    }
  }
  return result;
}
console.log(match(['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']))