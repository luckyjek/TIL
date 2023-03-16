// 논리연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가: short-circuit evaluation

const obj1 = {name: '🐶'};
const obj2 = {name: '🐱', owner:'Elin'};

// if문 안에서는 boolean 값으로 평가돼서,  true, false로 확인됨.
if (obj1 && obj2) {  // true , true
    console.log('둘다! true!');
}

// 조건문 밖에서 사용시, obj1은  true고, 나머지 하나 남았으니까,
// 굳이 true 나 false로 평가되지 않아도된다. 따라서 `평가가 단축`된다.
// 그래서 obj2가 그대로 할당 된다.
// 논리 연산자가 단축평가가 되는 특징이다.
let result = obj1 && obj2;
console.log(result);

result = obj1 || obj2;
console.log(result);


console.clear();
// 활용예
// 조건이 truthy일때 && 무언가를 해야 할 경우
// 조건이 falshy일때 || 무언가를 해야 할 경우
function changeOwner(animal) {
    if(!animal.owner){
        throw new Error('주인이 없어') // (친절한 메시지)어플리케이션을 강제로 종료한다.
    }
    animal.owner = '바뀐주인!';
}

function makeNewOwner(animal) {
    if(animal.owner){
        throw new Error('주인이 있어') 
    }
    animal.owner = '새로운주인!';
}

obj1.owner && changeOwner(obj1); // .owner가 없다. 따라서 실행 x 
obj2.owner && changeOwner(obj2); // .owner가 있다. 따라서 실행 o
console.log(obj1); // 뒤에꺼 실행안됨
console.log(obj2); // 뒤에꺼 실행됨

obj1.owner || makeNewOwner(obj1); // .owner가 없어서 뒤에꺼가 실행됨.
obj2.owner || makeNewOwner(obj2); // .owner가 있어서 앞에꺼가 실행됨.
console.log('obj1 makeNewOwner',obj1);
console.log('obj2 makeNewOwner',obj2);

// null 또는 undefined인 경우를 확인할때
let item = { price: 1 };
const price = item && item.price; // 애플리케이션이 경우 죽어버리므로, && 사용해서 undefind를 해준다.
console.log(price);

// 기본값을 설정
// default parameter는 null과 undefined인 경우
// || falshy한 경우 설정(할당) 0, -0, null, undefined, ''
function print(message) {
    const text = message || 'Hello';
    console.log(text);
}
print();
print(undefined);
print(null);
print(0);