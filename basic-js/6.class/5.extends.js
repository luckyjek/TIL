// class Tiger {
//     constructor(color){
//         this.color = color;
//     }

//     eat(){
//         console.log('먹자!');
//     }
//     sleep(){
//         console.log('잔다');
//     }
// }

// class Dog {
//     constructor(color){
//         this.color = color;
//     }

//     eat(){
//         console.log('먹자!');
//     }
//     sleep(){
//         console.log('잔다');
//     }
//     play(){
//         console.log('놀자아~!');
//     }
// }

// const dog = new Dog('red');

// console.log(dog.color);
// dog.eat()

//----------------------------------------------------

class Animal {
    constructor(color){
        this.color = color;
    }

    eat(){
        console.log('먹자!');
    }
    sleep(){
        console.log('잔다');
    }
}
 
class Tiger extends Animal {}
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {

    // 자식 class에서 constructor를 정의하는 순간,
    // animal에 필요한것도 다 받아와야 한다.
    constructor(color, ownerName){
        super(color); //부모
        this.ownerName = ownerName;
    }
    play(){
        console.log('놀자아~');
    }

    // 오버라이딩 overriding
    eat(){
        super.eat(); //부모에 있는 함수를 super를 통해 호출가능.
        console.log('강아지가 먹는다!');
    }
}
const dog = new Dog('빨강이', '엘리');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();