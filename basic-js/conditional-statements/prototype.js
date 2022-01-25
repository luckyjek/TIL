class Food {
    constructor(name) {
        this.name = name;
        this.brands = [];
    }
    //class내부에 구현하는 함수들은 메소드라고 부른다.
    addBrand(brand) {
        this.brands.push(brand);
    }
    print() {
        console.log(`${this.name}을/를 파는 음식점들:`);
        console.log(this.brands.join(", "));
    }
}

const pizza = new Food("피자");
pizza.addBrand("피자헛");
pizza.addBrand("도미도 피자");

const chicken = new Food("치킨");
chicken.addBrand("굽네치킨");
chicken.addBrand("BBQ");

console.log(pizza);
console.log(chicken);

pizza.print();
chicken.print();
// class Animal {
//     constructor(type, name, sound) {
//         this.type = type;
//         this.name = name;
//         this.sound = sound;
//     }
//     //say()함수를 class내부에서 구현해주었는데, 이렇게 함수를 등록하게되면,
//     //자동으로 prototype으로 등록이된다.
//     say() {
//         console.log(this.sound);
//     }
// }

// //console.log(Animal.prototype.say);

// //여기서 extends라는 키워드가 특정 클래스를 상속받는다 는 의미다.
// class Dog extends Animal {
//     //기존 Animal에서 사용하는 constructor를 덮어씌운다.
//     //그과정에서 super키워드를 사용해서, Animal이 가지고있는 constructor를 먼저 호출하고나서 자신이 해야될일을
//     //처리할 수가있다.
//     //지금은 Dog내부에서 따로 해줘야 될게없으니까 super를 한 번만 호출해주면 끝난다.
//     constructor(name, sound) {
//         //super()키워드를 사용하여 자신이 상속받은 class의 constructor를 호출한다.
//         super("개", name, sound);
//     }
// }

// class Cat extends Animal {
//     constructor(name, sound) {
//         super("고양이", name, sound);
//     }
// }
// const dog = new Dog("멍멍이", "멍멍");
// const cat = new Cat("야옹이", "야옹");

// dog.say();
// cat.say();
//------------------------------------
// function Dog(name, sound) {
//     this.type = "개";
//     this.name = name;
//     this.sound = sound;
// }

// function Cat(name, sound) {
//     this.type = "고양이";
//     this.name = name;
//     this.sound = sound;
// }

// Dog.prototype.say = function () {
//     console.log(this.sound);
// };

// Cat.prototype.say = function () {
//     console.log(this.sound);
// };

// const dog = new Dog("멍멍이", "멍멍");
// const cat = new Cat("야옹이", "야옹");

//'객체 생성자'를 만들때는 주로 '대문자'로 시작한다.

// function Animal(type, name, sound) {
//     //Animal이라는 객체 생성자를 만들었다.
//     this.type = type;
//     this.name = name;
//     this.sound = sound;
// }

// //prototype.say라는 함수를 Animal 객체 생성자에 넣어줬고,
// Animal.prototype.say = function () {
//     console.log(this.sound);
// };

// //Dog,Cat이라는 객체 생성자를 각각만들어서
// function Dog(name, sound) {
//     //Animal.call함수를 호출할때는 첫번째 파라미터에다가 Dog객체 생성자 함수에서의 this를 넣어주고,
//     //그 다음 들어오는 파라미터는 Animal의 파라미터를 의미한다.
//     Animal.call(this, "개", name, sound);
// }
// function Cat(name, sound) {
//     Animal.call(this, "고양이", name, sound);
// }

// //prototype 공유하도록하였고,
// Dog.prototype = Animal.prototype;
// Cat.prototype = Animal.prototype;

// const dog = new Dog("멍멍이", "멍멍"); //이 순간 하나의 객체가 만들어진다.
// const cat = new Cat("야옹이", "야옹");

// dog.say();
// cat.say();
