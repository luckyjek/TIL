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

// 생성자 함수 (시작하는 함수를 대문자로 만들어준다!)
// 생성자 함수라는 기술적인 것을 이용해서 객체(템플릿)를 손쉽게 만들 수 있다. -> 이렇게 가능한것이 JS언어에서는 
// 프로토타입을 base로 해서 객체지향프로그래밍을 지원해주기 때문이다.
// 비슷한 객체를 반복해서 생성해야하는 경우라면, 위처럼 객체 리터럴을 이용해서 매 번 작성하는게 아니라,
// 생성자 함수를 이용해서 손쉽게 객체를 생성할 수 있다.
function Fruit(name, emoji) {
    this.name = name,
    this.emoji = emoji,
    this.display = () => {
        console.log(`${this.name} ${emoji}`);
    };
    // return this; // 생략가능 자바스크립트 엔진이 자동적으로 만들어준다. 
                    // 즉, 생성자 함수에서는 this가 자동으로 리턴이된다.
}

// 정해진 Template를 이용해서 내가 원하는 data만 전달해주면, 기본적인 골격을 가지고가면서 만들어준다.
const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');
console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();
orange.display();