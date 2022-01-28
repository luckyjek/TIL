myFunction();

const myFunction = function myFunction() {
    console.log("hello world");
};
// myFunction();

// function myFunction() {
//     console.log("hello world!");
// }

// var value = "hello!";

// function myFunction() {
//     var value = "bye!";
//     if (true) {
//         var value = "world";
//         console.log("block scope: ");
//         console.log(value);
//     }
//     console.log("function scope: ");
//     console.log(value);
// }

// myFunction();
// console.log("global scope: ");
// console.log(value);
// const value = "hello!";

// function myFunction() {
//     console.log("myFunction() :", value);
// }

// function otherFunction() {
//     const value = "bye!";
//     console.log("otherFunction() :", value);
// }

// myFunction(); //hello!
// otherFunction(); //bye!

// console.log("global scope :", value); //hello!

// function sum(...rest) {
//     return rest.reduce((acc, current) => acc + current, 0);
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(sum(...numbers)); //36

// function subtract(x, y) {
//     //x, y는 '파라미터' <- 즉 함수에서 받아오는 값
//     return x - y;
// }

// const numbers = [1, 2];
// const result = subtract(...numbers);
// console.log(result);

// //function sum(...params) {
// function sum(...rest) {
//     //...rest라고하면 하나의 배열[]로 받아온다.

//     //기본값 0으로 시작해서, 0이라는 값이 acc(accumulator)가 되고,
//     //current는 1,2,3,4,5,6,7,8이 쭉~들어가져서 => acc + current로 순차적으로 실행한다.
//     return rest.reduce((acc, current) => acc + current, 0);
// }

// const result = sum(1, 2, 3, 4, 5, 6, 7, 8);

// console.log(result); //36

// console.log(sum(1, 2, 3, 4, 5, 6, 7)); //28

// //만약 하나라도 추가를 안하면 NaN(Not a Number)이 된다. 왜?  하나가 undefine이니까.
// console.log(sum(1, 2, 3, 4, 5, 6)); //NaN
// const numbers = [0, 1, 2, 3, 4, 5, 6];

// const [...rest, last] = numbers;
// console.log(one);
// console.log(two);
// console.log(rest);

// const purpleCuteSlime = {
//     name: "슬라임",
//     attribute: "cute",
//     color: "purple",
// };

// //name, attribute를 모아오는 역할을한다.
// const { color, ...cuteSlime } = purpleCuteSlime;
// console.log(color); //purple
// console.log(cuteSlime); //{ name: '슬라임', attribute: 'cute' }

// const { attribute, ...slime } = cuteSlime;
// console.log(slime);//{ name: '슬라임' }

// const numbers = [0, 1, 2, 3, 4, 5];

// const spreadNumbers = [...numbers, 1000, ...numbers];
// console.log(spreadNumbers);

// const animals = ["개", "고양이", "참새"];
// const anotherAnimals = [...animals, "비둘기"];
// // const anotherAnimals = animals.concat("비둘기");

// console.log(animals);
// console.log(anotherAnimals);
//------------------------------------------------------------------------------------
// const slime = {
//     name: "슬라임",
// };

// const cuteSlime = slime;
// cuteSlime.attribute = "cute";

// const purpleCuteSlime = cuteSlime;
// purpleCuteSlime.color = "purple";

// console.log(slime); //{ name: '슬라임', attribute: 'cute', color: 'purple' }
// console.log(cuteSlime); //{ name: '슬라임', attribute: 'cute', color: 'purple' }
// console.log(purpleCuteSlime); //{ name: '슬라임', attribute: 'cute', color: 'purple' }

// console.log(slime === cuteSlime); //true
// console.log(slime === purpleCuteSlime); //true
//-------------------------------------------------------------------------------------
// const slime = {
//     name: "슬라임",
// };

// const cuteSlime = {
//     ...slime, //slime이 가지고 있던 정보들이 다 들어온다.
//     attribute: "cute",
// };

// const purpleCuteSlime = {
//     ...cuteSlime, //cuteSlime이 가지고 있던 정보들이 다 들어온다.
//     color: "purple",
// };
// const greenCuteSlime = {
//     //color: "green", //color 값은 아직 purpleCuteSlime의 purple을 사용하고있다.
//     ...purpleCuteSlime, //이 자리에 기존에 있던 속성이 들어온다! 라고 이해하기
//     color: "green", //color값은 green으로 덮어쓰게된다.
// };

// console.log(slime); //{ name: '슬라임' }
// console.log(cuteSlime); //{ name: '슬라임', attribute: 'cute' }
// console.log(purpleCuteSlime); //{ name: '슬라임', attribute: 'cute', color: 'purple' }
// console.log(greenCuteSlime); //{ name: '슬라임', attribute: 'cute', color: 'green' }

// // const deepObject = {
//     state: {
//         information: {
//             name: "velopert",
//             languages: ["korean", "english", "chinese"],
//         },
//     },
//     value: 5,
// };

// //방법2. 비구조화 할당 문법을 1번 사용하면서 여러값을 다 빼올 수 있다.
// const {
//     //state안에있는, information안에있는 name, languages를 빼올것이다.
//     state: {
//         information: {
//             name,
//             languages: [firstLang, secondLang],
//         },
//     },
//     //그리고  value를 빼온다.
//     value,
// } = deepObject;

// const extracted = {
//     name,
//     firstLang,
//     secondLang,
//     value,
// };

// console.log(extracted);

// const deepObject = {
//     state: {
//         information: {
//             name: "velopert",
//             languages: ["korean", "english", "chinese"],
//         },
//     },
//     value: 5,
// };

// //name, languages, value 값을 밖으로 꺼내고싶다면 어떻게 해야될까?

// //방법1. 비구조화 할당 문법을 2번 사용
// const {
//     name,
//     languages: [first, second],
// } = deepObject.state.information;
// const { value } = deepObject;

// const extracted = {
//     name,
//     first,
//     second,
//     value,
// };
// //위의 코드와 같다.
// //만약 특정 객체를 만들때, 특정 key이름으로 선언된(18번째 줄) 값이 이미 있다면(11번째 줄),
// //value값을 설정해주는것을 생략해도된다.
// //const extracted = {
// //   name: name,
// //   languages: languages,
// //   value: value
// // }

// console.log(extracted); //{ name: 'velopert', first: 'korean', second: 'english', value: 5 }

// const animal = {
//     name: "멍멍이",
//     type: "개",
// };

// //animal.name이름을 이제부터 nickname이라고 부르고싶다 라고하면
// //const nickname = animal.name;

// //nickname을 비구조화 할당으로 처리해주기위해 이렇게하면된다.
// const { name: nickname } = animal;

// console.log("뭉뭉이"); // 뭉뭉이
// console.log(animal); //{ name: '멍멍이', type: '개' }
// const object = { a: 1, b: 2 };

// const { a, b } = object;

// console.log(a); // 1
// console.log(b); // 2

// function makeSound(animal) {
//     const tasks = {
//         //화살표함수도 가능
//         개: () => {
//             console.log("멍멍");
//         },
//         //메소드 만들 듯 선언도 가능 --최신JS문법
//         고양이() {
//             console.log("고양이");
//         },
//         비둘기() {
//             console.log("구구 구 구");
//         },
//         //익명함수의로 11번째줄과 같은 의미이다, 하지만 추천하지않는다. -> 비둘기 : function(){
//         //  console.log('구구 구구')
//         //}
//     };
//     //객체안에 animal값으로 우리가 원하는 함수가 있는지를 확인해줘야한다.
//     const task = tasks[animal];
//     //tasks[animal]이 없는경우
//     // if (!tasks[animal]) {
//     if (!task) {
//         console.log("...?");
//         return;
//     }
//     // tasks[animal]();
//     task();
// }

// makeSound("개"); //멍멍
// makeSound("비둘기"); //구구 구 구
// makeSound("사람"); //...?
// function getSound(animal) {
//     const sounds = {
//         개: "멍멍!",
//         고양이: "야옹~",
//         참새: "짹짹",
//         비둘기: "구구 구 구",
//     };
//     //sounds안에있는 특정 key를 조회한다.
//     //파라미터(animal)로 "개"가 들어와졌다면, sounds.개 라고 해야되지만 그 대신에
//     //객체 sounds뒤에 []를 넣고 파라미터로 받아온 "개" key를 넣어준다.
//     //따라서 sounds[animal]는 곧,객 value를 가르키게된다.
//     //이후에, 단축 평가 논리 계산법을 사용한 || "...?"를 뒤에 넣어준다.
//     return sounds[animal] || "...?";
// }

// console.log(getSound("개")); // 멍멍!
// console.log(getSound("비둘기")); // 구구 구 구
// console.log(getSound("사람")); // ...?
// const isAnimal = (text) => ["고양이", "개", "거북이", "너구리"].includes(text);
// console.log(isAnimal("개")); // true
// console.log(isAnimal("노트북")); // false

// function isAnimal(text) {
//     return (
//         text === "고양이" ||
//         text === "개" ||
//         text === "거북이" ||
//         text === "너구리"
//     );
// }

// console.log(isAnimal("개")); // true
// console.log(isAnimal("노트북")); // false

//--------------------------------------------------------------------------------
// const calculateCircleArea = (r = 1) => Math.PI * r * r; //PI = 3.14
// const area = calculateCircleArea();
// console.log(area); //3.141592653589793
//console.log(false || "hello");

// const namelessDog = {
//     name: "",
// };

// function getName(animal) {
//     const name = animal && animal.name;
//     return name || "이름이 없는 동물입니다.";
// }

// const name = getName(namelessDog);
// console.log(name);

// // const object = { name: 1 };
// const object = null;

// //객체가 아닐수도 있는 상황에는 앞에 object &&를 붙여 error가 나지않고, 코드가 잘 실행이된다.
// const name = object && object.name;

// console.log(name); //객체가 있고 없고에 따라 (위의 로직상) null or 1 의 값을 기대해 볼 수 있다.
// // const dog = {
// //     name: "멍멍이",
// // };

// function getName(animal) {
//     // if (animal) {
//     //     //이 값이 존재할 때(유효한값)만 animal.name값을 반환한다.
//     //     return animal.name;
//     // }
//     // return undefined;

//     //위의 코드를 단축하자면,
//     return animal && animal.name;
// }

// // const name = getName();
// // console.log(name); //undefined
// const name = getName(dog);
// console.log(name); //멍멍이

// //특정 값이 Truthy 한 값이라면 true, 그렇지 않다면 false 로 값을 표현하는 것을 구현
// const value = { a: 1 };
// const truthy = value ? true : false;

// //그런데 이를 더 쉽게 할 수도있다.
// //!value 는 false 가 되고, 여기에다시 !를 붙여서, !false 는 true 가 되어서, 결과는 true 가 됩니다.
// const truthy = !!value;
// console.log(truthy);
//-----------------------------------------------
// // const array = []; 배열이 비어있습니다.
// const array = [1, 2]; //배열이 비어있지 않습니다.
// let text = "";
// if (array.length === 0) {
//     text = "배열이 비어있습니다.";
// } else {
//     text = "배열이 비어있지 않습니다.";
// }
// console.log(text);

// //위와 같이 특정 조건을 따라 text값이 달라야 하는 상황이 있다고 가정해보자.
// //그럴 경우에는 다음과 같이 코드를 작성 할 수 있다.
// let text =
//     array.length === 0 ? "배열이 비어있습니다" : "배열이 비어있지 않습니다.";

// console.log(text);
