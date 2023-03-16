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
    [key]: milk,
};
console.log(obj);

// map과 object는 보기에는 비슷해보이지만, key and value로 이루어져있으므로
// 다양한 코딩을 방식을 시도해 볼 수 있지만, 사용할 수 있는 함수! 
// 인터페이스가 살짝 다르다.
const map2 = new Map([[key, milk]]);
console.log('map2:',map2);
console.log(obj[key]);  //Object는 접근 가능 
console.log(map2[key]);  // Map은 접근 불가능
console.log(map2.get(key)); 