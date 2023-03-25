// Map 은 Object와 유사하다.
// Object를 Map처럼 사용할 수 있다.
const map = new Map([
    ['key1','🍎'],
    ['key2','🍌']
]);
console.log(map);

// 사이즈 확인
console.log(map.size);

// 존재하는지 확인
console.log(map.has('key1'));
console.log(map.has('key6'));

console.clear();

// 순회
map.forEach((value, key) => console.log(key, value));
console.log('map.keys()', map.keys()); 
console.log('map.values()',map.values());
console.log('map.entries()',map.entries());

// 찾기
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key4'));

// 추가
map.set('key3', '🥝');
console.log(map);

// 삭제
map.delete('key3');
console.log(map)

// 전부삭제
map.clear();
console.log(map);

console.clear();

// 오브젝트와 큰 차이점?
const key = {name: 'milk', price:10};
const milk = {name: 'milk', price:10, description: '맛있는 우유'};
const obj = {
    [key]: milk, //key라는 object를 이용해서 milk라는 값을 할당해 줄것이다.
};
console.log(obj);

// map과 object의 큰 차이점은 구조상으로는 확인해 볼 수 없다. (유사 하기 때문)
// 하지만 사용할 수 있는 함수에 대해서는 다르다.

// 다른점 1. 
// map이기 때문에 다양한 함수 ex. forEach 등 사용가능하지만,
// object는 사용할 수 없다.

// 다른점 2.
// object에서는 key를 동적으로 접근할 수 있었다. 
// map은 접근이 불가능하다. -> 따라서 특정한 key를 찾으려면 .get 함수를 이용해서 

// 정리 : 
// map과 object는 key and value로 이루어져있으므로 다양한 코딩을 방식을 시도해 볼 수 있지만 
// 사용할 수 있는 함수 즉, 인터페이스가 살짝 다르다.


const map2 = new Map([[key, milk]]);
console.log('map2:',map2);
console.log(obj[key]);  //Object는 접근 가능 
console.log(map2[key]);  // Map은 접근 불가능
console.log(map2.get(key)); 