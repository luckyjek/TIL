// 구조 분해 할당 Destructuring Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들수 있다
const fruits = ['🍏', '🥝', '🍓', '🍌'];
const [fruit, second, ...others] = fruits;
console.log(fruit);
console.log(second);
console.log(...others);

const point = [1, 2];
const [x, y, z = 0] = point;
console.log(y);
console.log(x);
console.log(z);

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
    console.log('나이', job);    
}
display(elin);


const {name, age, job:occupation, pet = '강아지'} = elin;
console.log('name:',name);
console.log('age:',age);
console.log('occupation:',occupation);
console.log('pet:',pet);
console.clear();
// Quiz
const prop = {
    name: 'Button',
    styles: {
      size: 20,
      color: 'black',
    },
  };
  
//   function changeColor({styles}) {
//    const {color} = styles
    function changeColor({styles:{color}}) {
    console.log(color);
  }
  changeColor(prop);