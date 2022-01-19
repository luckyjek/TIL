//static상속

class Parent {
    static age = 37;
}

class Child extends Parent {}

console.log(Parent.age, Child.age);

// //super
// class Parent {
//     name;
//     constructor(name) {
//         this.name = name;
//     }

//     hello() {
//         console.log("hello", this.name);
//     }
// }

// class Child extends Parent {
//     age;

//     constructor(name, age) {
//         //부모에서 하는 일을 하고, 자식이 하는 일을 할 수 있도록 자식에서 this를 사용하기 직전에는
//         //super();를 꼭 호출하도록 작성해야된다.
//         //그래서 super는 부모의 constructor의 의미하며, 따라서 name이라는 인자를 그대로 넣어서 실행을 먼저 하게한다.
//         //이후 자식에서 할 것들을 설정하면된다.

//         super(name);
//         this.age = age;
//     }

//     //오버라이딩 함수
//     hello() {
//         console.log("hello", this.name, this.age);
//     }
// }

// const p = new Parent("Mark");
// const c = new Child("Mark", 37);

// console.log(p, c);
// c.hello();

//변수, 함수 추가 및 오버라이딩

// class Parent {
//     name = "Lee";

//     hello() {
//         console.log("hello", this.name);
//     }
// }

// class Child extends Parent {
//     age = 37;

//     //오버라이딩한 함수 hello()
//     hello() {
//         console.log("hello", this.name, this.age); // -- 자신이 구현한것을 호출하였다.
//     }
// }

// const p = new Parent();
// const c = new Child();

// console.log(p, c);
// c.hello();
// c.name = "Anna";
// c.hello(); //hello Anna 37

// //상속 기본

// class Parent {
//     name = "Lee";

//     hello() {
//         console.log("hello", this.name);
//     }
// }

// class Child extends Parent {}

// const p = new Parent();
// const c = new Child();

// console.log(p, c);
// //Parent { name: 'Lee' } Child { name: 'Lee' }
// //--Child는 Parent를 상속받고 있기에 멤버변수가 그대로 들어오게된다.

// c.hello();
// c.name = "Anna";
// c.hello();
// console.log(p);
// console.log(c);
//-----------------------------------------------------------------------C
//static변수, 함수

// class A {
//     static age = 37;
//     static hello() {
//         console.log(A.age); //static age에 접근할때는  A.age 즉, 클래스 이름으로 직접 .age를 부를수있다.
//         //new A해서 만든 객체가 아니라 class의 변수 class의 함수 라고 생각하면된다.
//     }
// }

// console.log("이건뭐지", A, "또이건뭐지", A.age);
// A.hello(); //37

// class B {
//     age = 37;
//     static hello() {
//         //static함수이자, class함수라고도 불린다.
//         console.log(this.age);
//     }
// }
//console.log(B, B.age); //undefind --왜냐하면 tstic age가 아니다.
//B.hello(); // undefind

//new B().hello(); // (intermediate value).hello is not a function  --왜냐하면 static함수이므로
//new B로 만든 객체(인스턴스)에 속해있는 함수가 아니다.

// class C {
//     static name = "이 클래스의 이름은 C가 아니다.";
// }

// console.log(C);

//get, set
// class A {
//     _name = "no name";

//     get name() {
//         return this._name + "@@@";
//     }

//     set name(value) {
//         //인자로 value받을수 있도록 만들었다.
//         this._name = value + "!!!";
//     }
// }

// const a = new A();
// console.log(a);
// //=표시를 통해 연산하며, Mark라는 문자열이 set함수가 불리우게된다.
// //왜냐하면 name이라는 이름의 set함수가 있기 때문이다. 따라서 그 인자로 오른쪽에 있는 표현식의 결과가 들어간다.
// a.name = "Mark"; //set함수동작
// console.log(a);
// console.log("get", a.name); //이와같이 호출시 get함수동작(불린다) 따라서 return this._name이 나온다.
// console.log("set", a._name); //setter한 결과가 나오므로 @@@제외하고, Mark에 !!! 만 나오게될것이다.

// //readonly
// class B {
//     _name = "no name";

//     get name() {
//         return this._name + "@@@";
//     }
// }

// const b = new B();
// console.log(b);
// b.name = "Mark";
// console.log(b); //set으로 효과가 발생하지않는다.
//-----------------------------------------------------------------------B
// //멤버함수
// class A {
//     hello1() {
//         //멤버 함수 설정하는 방법 1
//         console.log("hello1", this);
//     }
//     hello2 = () => {
//         //멤버 변수처럼 '함수를 할당'하는 방법 2
//         console.log("hello2", this);
//     };
// }
// new A().hello1();
// new A().hello2();

// //위와같이 만든 멤버함수는 그안에서 멤버 변수를 얻어서 사용할 수 있게된다.
// class B {
//     name = "Mark"; //멤버변수

//     hello() {
//         console.log("hello", this.name); //안에있는 name 멤버변수를 출력한다.
//     }
// }

// new B().hello();
//----------------------------------------------------------------------
//멤버변수 --constructor에서 객체 property를 할당해주는 방법
// class A {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// console.log(new A("Mark", 37));

// //class field는 런타임 확인 --위보다 더 쉽게 제공해주는 방식
// class B {
//     name; //===this.name
//     age; //===this.age
// }

// console.log(new B());

// class C {
//     name = "no name"; //초기값 설정
//     age = 0;

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// console.log(new C("Mark", 37));
// console.log(new C());
//--------------------------------------------------------------------------A
//constructor
// class A {}

// console.log(new A()); //constructor가 없으므로 인자가 없는상태로 생성

// class B {
//     //class B가 생성될때 constructor함수가 실행하게되는데 즉, 뭔가 실행이되는 로직을 넣을 수가있다.
//     constructor() {
//         console.log("constructor");
//     }
// }

// console.log(new B()); //constructor(..) 인자를 안넣어줬으므로 new B라고 만들때도 인자를 넣지않고 만들면된다.

// class C {
//     constructor(name, age) {
//         console.log("constructor", name, age);
//     }
// }

// console.log(new C("Elin", 32));
// console.log(new C());

//--------------------------------------------------------------------------
//class
//선언적 방식
// class A {}
// console.log(new A());

//class표현식을 변수에 할당
// const B = class {};
// console.log(new B());

//선언적 방식이지만 호이스팅은 일어나지 않는다.
// new C();
// class C {}
