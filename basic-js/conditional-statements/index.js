let i = 0;
let isFun = false;

while (!isFun) {
    console.log(i);
    i++;
    if (i === 30) {
        isFun = true;
    }
}
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// const names = ["멍멍이", "야옹이", "멍뭉이"];

// for (let i = 0; i < names.length; i++) {
//     //i가 배열의 names.length인 2보다 작을때까지 따라서 (0,1,2) 1씩 증가시킨다.
//     console.log(i, names[i]);
// }
// console.log(names.length); //현재 names.length는 3이다.
//---------------------Array
// const array = [1, true, { a: 1 }, [1, 2, 3, 4]];

// array.push(6);
// console.log(array);

// const objects = [{ name: "멍멍이" }, { name: "야옹이" }];

// console.log(objects.length); //2

// objects.push({
//     name: "멍뭉이",
// });
// console.log(objects.length); // 3

//---------------------getter  setter

// const numbers = {
//     a: 1,
//     b: 2,
//     get sum() {
//         console.log("sum");
//         return this.a + this.b;
//     },
// };
// console.log(numbers.sum); //3
// numbers.a = 5;
// console.log(numbers.sum); //7
// console.log(numbers.sum); //7
// console.log("endendendendendendend");

// const numbers = {
//     _a: 1,
//     _b: 2,
//     sum: 3,
//     calculate() {
//         //setter함수에서 호출할 함수이다.
//         console.log("calculate");
//         this.sum = this._a + this._b;
//     },

//     //2개의 getter함수는 앞으로 numbers._a혹은 numbers._b를 조회하게된다면, _a혹은 _b를 조회할 수 있게해준다.
//     get a() {
//         return this._a;
//     },
//     get b() {
//         return this._b;
//     },
//     set a(value) {
//         this._a = value; //value를 받아오면, this._a값으로 넣어준다.
//         this.calculate(); //다음 sum값도 update해준다. 그래서 calculate()를 해출해준다.
//     },
//     set b(value) {
//         this._b = value;
//         this.calculate();
//     },
// };

// console.log(numbers.sum); //3
// numbers.a = 5; //calculate
// console.log(numbers.sum); //7
// console.log(numbers.sum); //7
// console.log(numbers.sum); //7
const dog = {
    _name: "멍멍이",
    //_name이라고한 이유는 앞에 무조건 _(언더바) 일 필요없고, myName이런식으로도 가능하지만 뒤에 setter함수를 만들때 겹치지 않게
    //하기위해서 _를 사용했다.
    get name() {
        //조회
        console.log("_name을 조회합니다..");
        return this._name;
    },
    set name(value) {
        console.log(this._name + "이름이 바뀝니다.." + value);
        this._name = value;
    },
};

// console.log(dog.name); //set name( )이 있으므로 굳이 특정값을 조회하려고할때 _바를 안넣어줘도된다.
//_name을 조회합니다..
//멍멍이
// dog.name = "뭉뭉이";
//멍멍이이름이 바뀝니다..뭉뭉이
console.log(dog.name);
//_name을 조회합니다..
//뭉뭉이

// const numbers = {
//     a: 1,
//     b: 2,
//     get sum() {
//         console.log("sum함수가 실행됩니다!");
//         return this.a + this.b;
//     },
// };

// console.log(numbers.sum);
//sum함수가 실행됩니다!
//3
// numbers.b = 5;
// console.log(numbers.sum);
// sum함수가 실행됩니다!
// 6

//-------------------Object
//하나의 이름에 여러종류의 값을 넣을수 있게해준다.

// const dog = {
//     name: "멍멍이",
//     sound: "멍멍!",
//     say: function say() {
//         console.log(this.sound);
//     },
// };

// const cat = {
//     name: "야옹이",
//     sound: "야옹~",
// };

// dog.say();
// console.log(dog.say());
// cat.say = dog.say;
// cat.say();

// const catSay = cat.say;
// console.log("hi", catSay());

const ironMan = {
    name: "토니 스타크",
    actor: "로버트 다우니 주니어",
    alias: "아이언맨",
};

const { name } = ironMan;
console.log(name); //토니 스타크
const captainAmerica = {
    name: "스티븐 로저스",
    actor: "크리스 에반스",
    alias: "캡틴 아메리카",
};

function print({ alias, name, actor }) {
    const text = `${alias}(${name})역할을 맡은 배우는 ${actor}입니다.`;
    console.log(text);
}

// print(captainAmerica);
// print(ironMan);

//-------------------function
// const hello2 = (_string) => {
//     return `Hello${_string}!`;
// };

// console.log(hello2("elin"));

// const add = (a, b) => {
//     return a + b;
// };

// const sum = add(1, 2);
// console.log(sum);
//파라미터 -> 함수 -> 결과
// function getGrade(score) {
//     if (score === 100) {
//         return "A+";
//     } else if (score >= 90) {
//         return "A";
//     } else if (score === 89) {
//         return "B+";
//     } else if (score >= 80) {
//         return "B";
//     } else if (score === 79) {
//         return "C+";
//     } else if (score >= 70) {
//         return "C";
//     } else if (score === 69) {
//         return "D+";
//     } else if (score >= 60) {
//         return "D";
//     } else {
//         return "F";
//     }
// }

// const grade = getGrade(30);
// console.log(grade);

function hello(name) {
    // console.log("Hello" + name + "!");
    return `Hello${name}!`;
}

const result = hello("elin");
console.log(result);

// function add(a, b) {
//     return a + b;
// }

// const sum = add(1, 2);
// console.log(sum);

//------------------- if
// const a = 1;

// if (a + 1 === 2) {
//     const a = 2;
//     console.log("if문 안의 a값은" + a);
// }
// console.log("if문 밖의 a값은" + a);
