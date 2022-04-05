//MDN 객체로 작업하기: https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Working_with_Objects

const obj = {
    name: 'Elin',
    age: 20,
}

// 코딩하는 시점에, 정적으로 접근이 확정됨
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을때 대괄호 표기법 사용!
//object와 key라는 이름을 전달하면 Object안에 해당하는 key의 값을 return해주는 함수
function getValue(obj, key){
    return obj[key]; 
}

console.log(getValue(obj, 'name')); //Elin

function addKey(obj, key, value){
    obj[key] = value;
}
addKey(obj, 'job', 'engineer');
console.log(obj);

function deleteKey(obj, key){
    delete obj[key];
}
deleteKey(obj, 'age');
console.log(obj);