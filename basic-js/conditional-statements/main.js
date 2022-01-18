// switch 뒤 괄호 안에 있는 값이 무엇인지 중괄호 안에 있는 코드들을 비교해서 실행한다.
// 이중에 default: 뒤에 있는 문장은 항상 참이어서 실행되는 블럭이다.
// 문장이 한 줄이라서 중괄호는 생략한다.
let n = 5;
switch (n) {
    default:
        console.log(n);
}
//다음은 n 0이 5로 나누었을때 나머지가 0인 경우에 실행되는 블럭을 추가한것이다.
//case '비교할 값':을 이용해서 맞으면 실행된다.
//case 0:인 경우와 default:인 경우 두 블럭 모두 순서대로 실행이 된다.
switch (n % 5) {
    case 0:
        console.log("5의 배수 입니다.");
    default:
        console.log(n);
}

//만약에 해당 블럭이 실행된 후 다음 블럭을 거치지 않고 switch문을 나가고싶다면,
//case문 안에서 break;를 실행한다.
switch (n % 5) {
    case 0:
        console.log("5의 배수 입니다.");
        break;
    default:
        console.log(n);
}
//break와 case문의 순서를 잘 조정하여, 원하는 코드를 만들어 낼 수 있도록 제대로 이해해야한다.

n = 6;
switch (n % 5) {
    case 0:
        console.log("5의 배수 입니다.");
        break;
    case 1:
    case 2:
    case 3:
    case 4:
        console.log("5의 배수가 아닙니다.");
    default:
        console.log(n);
}

//-------------------------------------------------------------------------------------- 3항연산자
// 조건 ? 조건이 참이면 실행되는 표현식 : 조건이 거짓이면 실행되는 표현식
// 중괄호 {}를 사용할 수 없는 문법이기 때문에 하나의 표현식만 가능하다.
// let n = 5;
// console.log(n % 5 === 0 ? "5의 배수입니다." : "5의 배수가 아닙니다.");

//표현식의 결과를 변수에 할당할 수 있다.
// const message = n % 5 === 0 ? "5의 배수입니다." : "5의 배수가 아닙니다.";
// console.log(message);

//----------------------------------------------------------------------------------------&& || ! v-2

//표현식 && 표현식
//둘다 참 일때만 참이다.
//표현식은 앞에 먼저 평가하고, 뒤에를 평가한다.
//앞 표현식을 평가를 해서 참 일때만, 뒤 표현식을 평가할 필요가 생기기 때문에 뒤의 표현식이 실행된다.
// let n = 5;
// n % 5 === 0 && console.log("5로 나누어 떨어질때만 실행");

//앞 표현식의 평가 결과가 거짓일때는 뒤 표현식을 평가할 필요가 없어서 실행하지 않는다.

// n = 6;
// n % 5 === 0 && console.log("5로 나누어 떨어질때만 실행");

//표현식 || 표현식
//둘 중에 하나만 참이면 참이다.
//앞 표현식을 평가를 해서 참이면, 뒤 표현식을 평가할 필요가 없어서 실행하지 않는다.
// n = 5;
// n % 5 === 0 || console.log("5로 나누어 떨어지지 않을때만실행."); //앞에가 참이기때문에, 뒤에가 실행이안됨

//앞 표현식을 평가를 해서 거짓일때만, 뒤 표현식을 평가할 필요가 생기기 때문에 뒤의 표현식이 실행된다.

// n = 6;
// n % 5 === 0 || console.log("5로 나누어 떨어지지 않을때만실행.");

//---------------------------------------------------------------------------------&& || ! v-1
//표현식 && 표현식
// if (true && true) {
//     console.log("두개 모두 참이면 참");
// }
// if (true && false) {
//     console.log("한개만 참이면 거짓");
// }
// if (false && true) {
//     console.log("한개만 참이면 거짓");
// }
// if (false && false) {
//     console.log("두개 모두 거짓이면 거짓");
// }

//표현식 || 표현식
// if (true || true) {
//     console.log("두개 모두 참이면 참");
// }
// if (true || false) {
//     console.log("한개만 참이면 참");
// }
// if (false || true) {
//     console.log("한개만 참이면 참");
// }
// if (false || false) {
//     console.log("두개 모두 거짓이면 거짓");
// }

//!표현식

// if (!true) {
//     console.log("참이면 거짓");
// }

// if (!false) {
//     console.log("거짓이면 참");
// }

//----------------------------------------------------------------------if(){} else if() {} else{}
//if(){} else if() {} else{}
// const n = 15;

// if (n % 3 === 0) {
//     console.log("n은 3의 배수 입니다.");
// } else if (n % 5 === 0) {
//     console.log("n은 5의 배수 입니다.");
// } else {
//     console.log("n은 3의 배수도 아니고, 5의 배수도 아닙니다.");
// }

//n이 3의 배수이면서, 5의 배수이면 뭐라고 출력할까요?
// if (n % 3 === 0 && n % 5 === 0) {
//     console.log("n은 15의 배수입니다.");
// } else if (n % 3 === 0) {
//     console.log("n은 3의 배수입니다.");
// } else if (n % 5 === 0) {
//     console.log("n은 5의 배수입니다.");
// } else {
//     console.log("n은 3의 배수도 아니고, 5의 배수도 아닙니다.");
// }
//n%3===0 과 n%5===0의 값은 여러번 반복되므로, 변수나 상수에 넣습니다.

// const multipleOfThree = n % 3 === 0;
// const multipleOfFive = n % 5 === 0;
// if (multipleOfThree && multipleOfFive) {
//     console.log("n은 15의 배수입니다.");
// } else if (multipleOfThree) {
//     console.log("n은 3의 배수입니다.");
// } else if (multipleOfFive) {
//     console.log("n은 5의 배수입니다.");
// } else {
//     console.log("n은 3의 배수도 아니고, 5의 배수도 아닙니다.");
// }

//중첩을 이용해서 표현할 수도 있습니다.
// if (multipleOfThree && multipleOfFive) {
//     console.log("n은 15의 배수입니다.");
// } else {
//     if (multipleOfThree) {
//         console.log("n은 3의 배수입니다.");
//     } else if (multipleOfFive) {
//         console.log("n은 5의 배수입니다.");
//     } else {
//         console.log("n은 3의 배수도 아니고, 5의 배수도 아닙니다.");
//     }
// }

//if () {} else {}
// const n = 37;

// if (n > 0) {
//     console.log("n이 0보다 큰 경우");
// } else {
//     console.log("n이 0보다 크지 않은 경우");
// }

//블록 안 문장이 하나일 경우, 중괄호 없이 사용 가능

// if (n > 0) console.log("n이 0보다 큰 경우");
// else console.log("n이 0보다 크지 않은 경우");

/*
if(표현식){
  표현식이 참으로 평가될 때, 실행되는 문장들의 모음
}
*/
// if (true) {
//     console.log("항상 실행");
// }
// if (false) {
//     console.log("항상 실행되지 않음");
// }

//블록에 코드가 한줄이면, 중괄호 {}는 생략 가능하다.

// if (true) console.log("항상 실행");
// if (false) console.log("항상 실행되지 않음");
