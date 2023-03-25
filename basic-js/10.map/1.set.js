// Array 배열과 조금 다른 성격을 가진 set, map 을 알아보자.

// 집합체 Set 
const set = new Set([1, 2, 3]);
console.log('setsetsetsetset :', set);

// 사이즈 확인
console.log(set.size);

// 존재하는지 확인
console.log(set.has(2)); //true
console.log(set.has(6)); //false

// set은 iterable하다. 즉 순회가 가능하다.
// 따라서 배열의 고차함수처럼 받아서 하나씩 출력 할 수 있다.
set.forEach((item) => console.log(item));
for(const value of set.values()){
    console.log('const of', value);
}

// 추가
set.add(6);
console.log('set1',set);
set.add(6); // 있는데 추가해서 무시됨.
console.log('set2',set); // 중복불가 -> 배열은 중복이 가능하지만, set은 중복이안된다.

// 삭제
set.delete(6);
console.log(set);

// 전부 삭제
set.clear();
console.log(set);

console.clear();
// 오브젝트 세트
const obj1 = {name: '🍎', price: 8}; //price 10
const obj2 = {name: '🍌', price: 5};
const objs = new Set([obj1, obj2]);// new 키워드로, 아.. 새로운객체를 만들었지!
// const objs = [obj1,obj2]; <- 얘는 배열이잖우.
console.log('objs', objs);

// 퀴즈
obj1.price = 10;
objs.add(obj1); // 위에 price가 10으로 바뀌면서 .add가 될 것 같았지만, 동일한 object주소를 추가하므로 즉, '쉘로우 카피'가되므로 동일한것이 들어가지못한다. 
console.log(objs);

// 퀴즈
const obj3 = {name: '🍌', price:5};
objs.add(obj3); // 새롭게 object 리터럴을 이용해서 만들었으므로, 새로운 주소를 가지고 있을 것이다.
console.log(objs);
obj3.price = 8;
console.log(objs);


