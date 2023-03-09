// 자바스크립트는 프로토타입 기반이라서 생성자함수를 통해 객체지향 프로그래밍을 구현했다.
// 즉, 예전 JS언어 에서는 프로토타입을 이용해서 비슷한 구조를 가진 객체들을 찍어 낼 수 있었다면,
// But es6이후, 도입된 Class를 지원하면서부터 Class를 기반한 조금 더 손쉽게 객체를 만들 수 있다.

// 정리하자면, JS에서는 생성자함수, Class 모두 사용 할 수 있지만, 모던한 최신 JS에서는 
// Class를 이용한다.


// 객객체를 손쉽게 만들수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법)
// 3. 클래스 ✨

// function Fruit(name, emoji) {
//     this.name = name,
//     this.emoji = emoji,
//     this.display = () => {
//         console.log(`${this.name} ${emoji}`);
//     };
// }

// 위의 생성자 함수를 아래 Class로 바꿔보자! 
class Fruit {
    
    // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
    // 생성자에는 객체를 만들때 필요한 데이터를 인자로 받아올 수 있도록(함수형태와 비슷) 생성자를 이용.
    constructor(name, emoji){
    this.name = name;
    this.emoji = emoji;
    }
    
    // Class에 필요한 멤버함수는 생성자에서 등록하지않고, 보통 일반함수 or errow 함수로 작성 가능.
    // display (){
    //     console.log(`${this.name} ${this.emoji}`);
    // };

    display = () => {
        console.log(`${this.name} ${this.emoji}`);
    };
}

// ✅ 어떤 class에 의해 만들어진 객체라면, 인스턴스라고 부른다.

//apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');
//orange는 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('apple', '🍊');
console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();

// obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = {name: 'ellie'};