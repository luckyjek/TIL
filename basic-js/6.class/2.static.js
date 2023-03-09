// 모든 객체마다 동일하게 참조해야될 property(속성), method(행동)이 있다면?
// 어떻게 할 수 있을까? 
// 바로 Class level의 propperty와 method를 사용한다.
// class안에서 static라는 키워드를 property나 method 앞에 붙인다.
// 그러면, 만들어진 instance에 포함되지않고, class에 그대로 남아있게 된다.(class에 딱 한번만 만들어지고, 각각의 instance에는 만들어지지않는다.)
// 한 번만 정의하고, 재사용 할 수있다. 그래서 호출할 때도 class이름의 . 즉, class레벨에 있는 속성/메소드를 호출 할 수 있따.


// static 정적 프로퍼티, 메서드
// 서로 다른 데이터를 가지고 있을경우, Instance레벨의 property와 method를 만드는것이 맞다.
class Fruit {
    static MAX_FRUITS = 4; 
    //생성자: new 키워드로 객체를 생성할때 호출되는 함수
    constructor(name, emoji){
    this.name = name; //Instance레벨의 property
    this.emoji = emoji; //Instance레벨의 property
}

    // 클래스 레벨의 메서드
    // class별로 공통적으로 사용할 수 있고, 
    // 만들어진 Instance에 참조할 필요가 없는 함수라면, static으로 만들 수 있다.
    static makeRandomFruit() {
        // Class 레벨의 메서드에서는 this를 참조할 수 없다. 왜냐하면,
        // 클래스 자체로는 아무런것도 채워지지 않은 템플릿 상태이기 때문이다.
        return new Fruit('banana', '🍌');
    }
    // Instance레벨의 Method
    // 만들어진 Instace와 밀접하게 관련있기 떄문에 instance레벨로 두는게 좋다.
    display = () => {
        console.log(`${this.name} ${this.emoji}`);
    };
}

const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);

//apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');
//orange는 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('apple', '🍊');
console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();

// static 예시로 
// Math.pow(); 
// Number.isFinite(1);