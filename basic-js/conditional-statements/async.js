function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
            //reject(new Error("reason")); //1초 기다렸다가 reject가 불리면서
        }, ms);
    });
}

//Promise.all
(async function main() {
    //all은 함수니까 await로 실행시키는 것이다.
    const results = await Promise.all([p(1000), p(2000), p(3000)]);
    //3개의 p함수가 전부다 실행이돼서 모두 resolve가되면 results로 배열로 값이 넘어온다.
    console.log(results);
})();

//Promise.race --3개중 먼저 실행되는 resolve되는 하나만 있으면 걔가 바로 results값으로 넘어오고 끝난다.
(async function main() {
    //all은 함수니까 await로 실행시키는 것이다.
    const results = await Promise.race([p(1000), p(2000), p(3000)]);
    console.log(results);
})();

//---------------------------------------------------------
// function p(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(ms);
//             //reject(new Error("reason")); //1초 기다렸다가 reject가 불리면서
//         }, ms);
//     });
// }
// //Promise
// //체이닝 같은 계속 처리가 반복되면서 비동기의 로직이 이어진다.
// p(1000)
//     .then(() => p(1000))
//     .then(() => p(1000))
//     .then(() => {
//         console.log("3000 ms 후에 실행");
//     });

// //위를 async await로 처리한다면,

// (async function name() {
//     await p(1000);
//     await p(1000);
//     await p(1000);
//     console.log("3000 ms 후에 실행");
// })();

//------------------------------------------

// //finally

// function p(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(ms);
//             //reject(new Error("reason")); //1초 기다렸다가 reject가 불리면서
//         }, ms);
//     });
// }

// async function asyncP() {
//     const ms = await p(1000);

//     return "Mark :" + ms;
// }

// (async function main() {
//     try {
//         const name = await asyncP();

//         console.log(name);
//     } catch (error) {
//         console.log(error);
//     } finally {
//         console.log("end");
//     }
// })();

//error의 전파

// function p(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve(ms);
//             reject(new Error("reason")); //1초 기다렸다가 reject가 불리면서
//         }, ms);
//     });
// }

// async function asyncP() {
//     //p(ms)로 부터 new Error가 throw된다 이때, 정상적으로 처리하고싶다면 try catch로감싸서 처리하면되겠지만,
//     //여기서 발생한 error로 인해 밑으로 계속 진행하고 싶지 않다면 그냥 이대로 둬도 여기서 바로 throw가 발생하기때문에
//     //23번째 줄 asyncP()가 발생하는 것 처럼 돼서 catch로 넘어가서 console.log에 찍힐 것이다.
//     const ms = await p(1000);

//     return "Mark :" + ms;
// }

// (async function main() {
//     try {
//         const name = await asyncP();

//         console.log(name);
//     } catch (error) {
//         console.log(error);
//     }
// })();
//------------------------------
// //async function에서 return되는 값은
// //Promise.resolve함수로 감싸서 리턴된다.

// function p(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(ms);
//             // reject(new Error("reason"));
//         }, ms);
//     });
// }

// async function asyncP() {
//     const ms = await p(1000);
//     //p를 통해서 얻어온 값을 가지고 내가 어디서 뭔가 작업을 한 다음에
//     //그걸 또 기다렸다가 main()에 돌려주는 식으로 사용 할 수 있다.
//     return "Mark :" + ms;
// }

// (async function main() {
//     try {
//         const name = await asyncP();

//         console.log(name);
//     } catch (error) {
//         console.log(error);
//     }
// })();
//------------------------------------------
// //async function에서 return되는 값은
// //Promise.resolve함수로 감싸서 리턴된다.

// function p(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             //resolve(ms);
//             reject(new Error("reason"));
//         }, ms);
//     });
// }

// async function asyncP() {
//     return "Mark";
// }
// (async function main() {
//     try {
//         //async달린 함수를 await가 바로 호출 할 수 있는 이유가 뭐냐면 async 키워드가 붙은 함수는
//         //return되는 값에다가 Promise시간에 배웠던 Promise.resolve함수로 감싸서 return하게되는 것이다.
//         const name = await asyncP();
//         //Promise.resolve를 통해서 resovle되므로 (값이 들어오면 바로 그 값이 resolve된다) 따라서 name이 잘 return될 것이다.
//         console.log(name);
//     } catch (error) {
//         console.log(error);
//     }
// })();
//------------------------------------
// //Promise객체가 rejected된 경우의 처리를 위해
// //try catch를 이용한다.
// function p(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             //resolve(ms);
//             reject(new Error("reason"));
//         }, ms);
//     });
// }

// (async function main() {
//     //1초 후에 reject가 발생할텐데, 이럴때 처리를 위해 사용하는것이 try catch로 감싸는것이다.
//     try {
//         const ms = await p(1000);
//         //error가 발생하지 않고 정상적으로 resolve됐었다면 여기 위치에서 계속 처리가 될 것이다.
//     } catch (error) {
//         //catch에서 넘어오는것이 바로 reject됐을때의 new Error('reason')로 만들어진 객체가
//         //인자가 (error)로 넘어오는 것이다
//         console.log(error);
//     }
// })();
//-----------------------------------
// //await를 사용하는 경우, 항상 async함수 안에서 사용되어야 한다.

// function p(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(ms);
//         }, ms);
//     });
// }

// (async function main() {
//     const ms = await p(1000);
//     console.log(`${ms} ms후에 실행된다.`);
// })();

//main();

//--------------------------------------
// //Promise객체를 리턴하는 함수

// function p(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(ms);
//         }, ms);
//     });
// }
// //Promise객체를 이용해서 비동기 로직을 수행할 때
// p(1000).then((ms) => {
//     console.log(`${ms} ms후에 실행된다.`);
// });

// //Promise 객체를 리턴하는 함수를 await로 호출하는 방법

// //then으로 연결하지않고, 앞에 awite키워드를 붙이면 정상적으로 resolve됐을때  ms가 return값으로 온다.
// const ms = await p(1000);
// //await를 붙이면 실제로는 비동기처리를 보냈지만 비동기처리가 끝날때까지 다음 줄로 넘어가지않고, 기다렸다가
// //resolve가되면 그때 resolve(ms)<-라고 넣어준 인자값을 return해서 밑으로 이어지게 되는것이다.
// console.log(`${ms} ms후에 실행된다.`);
