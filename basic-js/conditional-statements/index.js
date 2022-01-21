//-------------------Object
//하나의 이름에 여러종류의 값을 넣을수 있게해준다.
const dog = {
    name: "멍멍이",
    sound: "멍멍!",
    // say: function say() {
    //     console.log(this.sound);
    // },
    say() {
        console.log(this.sound);
    },
};

dog.say();
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

print(captainAmerica);
print(ironMan);

//-------------------function
const hello2 = (_string) => {
    return `Hello${_string}!`;
};

console.log(hello2("elin"));

const add = (a, b) => {
    return a + b;
};

const sum = add(1, 2);
console.log(sum);
//파라미터 -> 함수 -> 결과
function getGrade(score) {
    if (score === 100) {
        return "A+";
    } else if (score >= 90) {
        return "A";
    } else if (score === 89) {
        return "B+";
    } else if (score >= 80) {
        return "B";
    } else if (score === 79) {
        return "C+";
    } else if (score >= 70) {
        return "C";
    } else if (score === 69) {
        return "D+";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

const grade = getGrade(30);
console.log(grade);

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
