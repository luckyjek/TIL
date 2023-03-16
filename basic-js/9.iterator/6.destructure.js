// 구조 분해 할당 Destructuring Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들수 있다
const fruits = ['🍏', '🥝', '🍓', '🍌'];
const [fruit, second, ...others] = fruits; // 배열안에서도 조금 더 의미있는 이름으로 전달가능하다.
console.log(fruit);
console.log(second);
console.log(others);

const point = [1, 2];
const [x, y, z = 0] = point;
console.log(y);
console.log(x);
console.log(z); // point 안에 z라는 값이 없다면, 기본값 설정이 가능하다.

//------------------------------------------------------------------------
function createEmoji() {
    return ['apple', '🍎'];
}
const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const elin = {name: 'Elin', age: 3, job: 's/w engineer' };
function display({name, age, job}) {
    console.log('이름', name);
    console.log('나이', age);
    console.log('직업', job);    
}
display(elin);

// job:occupation 내가 사용하고자 하는 이름을 붙여줄 수 있다. 
// 따라서 elin의 job이라는 key가 occupation으로 변환되어 사용가능해졌다.
const {name, age, job:occupation, pet = '강아지'} = elin;
console.log('name:',name);
console.log('age:',age);
console.log('occupation:',occupation);
console.log('pet:',pet);

console.clear();
//------------------------------------------------------------------------
// Quiz
const prop = { name: 'Button', styles: { size: 20, color: 'black' }};

function changeColor({ styles: { color } }) {
  console.log(color)
  // console.log('prop.color', color);
}
changeColor(prop)

//   function changeColor({styles}) {
//    const {color} = styles
function changeColor({styles:{color}}) {
  console.log(color);
}
changeColor(prop);