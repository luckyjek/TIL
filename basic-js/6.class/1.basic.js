// 객객체를 손쉽게 만들수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법)
// 3. 클래스 ✨

//생성자 함수
class Fruit {
    //생성자: new 키워드로 객체를 생성할때 호출되는 함수
    constructor(name, emoji){
    this.name = name;
    this.emoji = emoji;
}
    //객체안에서 사용하는 멤버함수는 일반함수 or errow 함수로 작성 가능.
    display = () => {
        console.log(`${this.name} ${this.emoji}`);
    };
}

//apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');
//orange는 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('apple', '🍊');
console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();