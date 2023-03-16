// Iterator을 조금 더 심플하게 만들 수 있는것이 Generator(생성기 === 값을 생성할 수 있는)이다.

// const multiple = {
//     [Symbol.iterator]: () => {
//         const max = 10;
//         let num = 0;
//         return {
//             next() {
//                 return {value: num++ *2, done: num > max}
//             }
//         }
//     }
// }

// function다음에 *를 붙여야 Generator라고 알 수 있다.
function* multipleGenerator() {
    try{
        for(let i = 0; i < 10; i++) {
            console.log('gene',i);
            yield i ** 2;
        }
    }catch(error) {
        console.log(error);
    }
    
}
const multiple = multipleGenerator();
let next = multiple.next();

// multiple.return();
multiple.throw('Error!');
console.log(next.value, next.done);

next = multiple.next();
console.log(next.value, next.done);