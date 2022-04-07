// 생성자 함수
// 4. function Folder -> 5.expression.js에서 언급
// 생성자 함수 const object = new Function(); 

// const apple = {
//     name: 'apple',
//     display: function(){
//         console.log(`${this.name} 🍎`);
//     }
// }

// const orange = {
//     name: 'orange',
//     display: function(){
//         console.log(`${this.name} 🍊`);
//     }
// }

//생성자 함수
function Fruit(name, emoji) {
    this.name = name,
    this.emoji = emoji,
    this.display = () => {
        console.log(`${this.name} ${emoji}`);
    };
    //return this; // 생략가능
}

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('apple', '🍊');
console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();