function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const getDog = async () => {
    await sleep(1000);
    return "멍멍이";
};

const getRabbit = async () => {
    await sleep(500);
    return "토끼";
};
const getTurtle = async () => {
    await sleep(3000);
    return "거북이";
};

async function process() {
    try {
        const [dog, rabbit, turtle] = await Promise.all([
            getDog(),
            getRabbit(),
            getTurtle(),
        ]);
    } catch (e) {
        console.log(e);
    }
}

process();

// function sleep(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function makeError() {
//     await sleep(1000);
//     const error = new Error();
//     throw error;
// }

// async function process() {
//     try {
//         await makeError();
//     } catch (e) {
//         console.error(e);
//     }
// }

// process();

// function sleep(ms) {
//     //특정 ms이후,resolve함수가 호출돼서 Promise가 끝나게될 것이다.
//     return new Promise((resolve) => setTimeout(resolve, ms));
// }
// //async키워드 붙이기
// async function process() {
//     console.log("안녕하세요!");
//     //Promise앞 부분에는 await를 붙여준다.
//     await sleep(1000); // 1초쉬고
//     console.log("반갑습니다!");
//     return true;
// }

// process().then((value) => {
//     console.log(value);
// });

// //따로 callback은 받아오지 X
// function increaseAndPrint(n) {
//     //새로운 Promise를 만들어서 반환 할 것이다.
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const value = n + 1;
//             if (value === 5) {
//                 //값이 5가 된다면 실패하게될 것이다.
//                 const error = new Error("5가 되면 실패");
//                 error.name = "ValueIsFiveError";
//                 reject(error);
//                 return; //다음에는 아무 작업도 처리하지 않겠다!
//             }
//             //실패하는 상황이 아니라면? 아래코드 출력
//             console.log(value);
//             resolve(value); //resolve를 통해서 1을 더한 값을 반환해준다.
//         }, 1000);
//     });
// }

// increaseAndPrint(0)
//     .then(increaseAndPrint)
//     .then(increaseAndPrint)
//     .then(increaseAndPrint)
//     .then(increaseAndPrint)
//     .then(increaseAndPrint)
//     .catch((e) => {
//         console.error(e);
//     });
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error("Error 발생!"));
//     }, 1000);
// });

// //then을 사용하여, Promise가 끝나고 할 작업을 설정해 줄수가있다.
// myPromise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((e) => {
//         console.log(e);
//     });

// function increaseAndPrint(n, callback) {
//     setTimeout(() => {
//         const increased = n + 1;
//         console.log(increased);
//         if (callback) {
//             callback(increased);
//         }
//     }, 1000);
// }

// increaseAndPrint(0, (n) => {
//     increaseAndPrint(n, (n) => {
//         increaseAndPrint(n, (n) => {
//             increaseAndPrint(n, (n) => {
//                 increaseAndPrint(n, (n) => {
//                     console.log("끝!");
//                 });
//             });
//         });
//     });
// });
// function work(callback) {
//     setTimeout(() => {
//         const start = Date.now();
//         for (let i = 0; i < 10000; i++) {}
//         const end = Date.now();
//         callback(end - start + "ms");
//     }, 0);
// }

// console.log("작업 시작!");
// work((endTime) => {
//     console.log(endTime);
//     console.log("작업이 끝났어요");
// });
// console.log("다음 작업");

// function work(callback) {
//     //2
//     setTimeout(() => {
//         const start = Date.now();
//         for (let i = 0; i < 1000000000; i++) {}
//         const end = Date.now();
//         console.log(end - start + "ms");
//         callback(end - start); //작업이 끝나고나서 callback 호출이된다. 그래서 이 결과값은 12번째줄로 넘어간다.
//     }, 0);
// }
// console.log("작업 시작!"); //1
// work((ms) => {
//     //8번째 줄 callback으로 부터 ms를 받아와서, 아래의 로그를 찍는다.
//     console.log("작업이 끝났어요!");
//     console.log(ms + "ms 걸렸다고 해요.");
// });
// console.log("다음 작업"); //3
