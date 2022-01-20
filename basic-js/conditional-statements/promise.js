/**
 * 프로미스 객체 여러개를 생성하여,
 * 배열로 만들어 인자로 넣고 Promise.race 를 실행하면,
 * 배열의 모든 프로미스 객체들 중 가장 먼저 fulfilled 된 것으로, then의 함수가 실행된다.
 * then의 함수의 인자로 가장 먼저 fulfilled된 프로미스 객체들의 resolve 인자값을 돌려준다.
 */

//Promise.all([프로미스 객체들]);

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

Promise.race([p(1000), p(2000), p(3000)]).then((message) => {
    console.log("가장 빠른 하나가 fulfilled 된 이후에 실행된다.", message);
});

//--------------------
// /**
//  * 프로미스 객체 여러개를 생성하여,
//  * 배열로 만들어 인자를 넣고, Promises.all을 실행하면,
//  * 배열의 모든 프로미스 객체들이 fulfilled 되었을때, then의 함수가 실행된다.
//  * then의 함수의 인자로 프로미스 객체들의 resolve인자값을 배열로 돌려준다.
//  */

// //Promise.all([프로미스 객체들]);

// function p(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(ms);
//         }, ms);
//     });
// }

// Promise.all([p(1000), p(2000), p(3000)]).then((messages) => {
//     console.log("모두 fulfilled된 이후에 실행된다.", messages);
// });

//--------------------------

// /**
//  * Promise.reject를 사용하면, catch로 연결된 rejected상태로 변경된다.
//  */
// Promise.reject(/* value */);

// Promise.reject(new Error("reason"))
//     .then((error) => {}) //딱히 의미가 있지는않다. 왜? code상에서는 바로 reject될 테니까. 바로 catch쪽으로 error가 들어간다.
//     .catch((error) => {
//         console.log(error);
//     });
//-------------------
// /**
//  * value가 프로미스 객체인지 아닌지 알 수 없는 경우, 사용하면 연결된 then메섯드를 실행한다.
//  * value가 프로미스 객체면, resolve된 then메서드를 실행한다.
//  * value가 프로미스 객체가 아니면, value를 인자로 보내면서 then메서드를 실행한다.
//  */

// //방법 2가지 : Promise.resolve( /*value*/ );
// //인자로 넣을 수 있는것은 크게 2가지다.
// //1) value가 프로미스 객체를 바로 넣을수도있고,
// //2) 프로미스 객체가 아니라 일반 값을 인자로 넣어서 보낼 수 있다.

// Promise.resolve(
//     new Promise((resolve, reject) => {
//         setTimeout(() => resolve("foo"), 1000);
//     })
// ).then((data) => {
//     console.log(
//         "프로미스 객체인 경우, resolve된 결과를 받아 then이 실행됩니다.",
//         data
//     );
// });

// Promise.resolve("bar").then((data) => {
//     // resolve안에있는 value가 (then메서드가없는) Promises가 아닌 경우에는 값이 그대로 넘어와서 fulfilled된다.
//     // 따라서 문자열 데이터가 바로  then으로 바로 값이 넘어간다.
//     console.log("then 메서드가 없는 경우, fulfilled가 된다.", data);
// });

//--------------------------
// /**
//  * then함수에서 다시 프로미스 객체를 리턴하는 방법을 통해 체이닝하면, 비동기 작업을 순차적으로 아래로 표현할 수 있다.
//  * then에 함수를 넣는 여러 방법을 확인해보자.
//  */

// function p() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, 1000);
//     });
// }

// p() //1초뒤에 (바로 뒤)여기
//     .then(() => {
//         return p(); //2초시작
//     })
//     //2초뒤에 (바로 뒤)여기
//     .then(() => p())
//     //3초뒤에 (바로 뒤)여기
//     .then(p)
//     //4초뒤에 (바로 뒤)여기
//     .then(
//         //드디어 4초뒤에 여기 블럭에 들어왔다.
//         () => {
//             console.log("4000ms 후에 fulfilled된다.");
//         }
//     );

//---------------------------
// /**
//  * 보통 비동기 작업을 할때, callback 함수를 인자로 넣어 로직이 끝나면 callback 함수를 호출한다.
//  * 이런 경우 함수가 아래로 진행되지 않고, callback함수 안으로 진행된다.
//  */

// //callback을 인자로 받는 c함수 - 이 callback은 아마 함수가 되겠지?
// function c(callback) {
//     setTimeout(() => {
//         callback(); //인자로 받은 callback을 받게된다.
//     }, 1000);
// }

// //한번에 비동기 작업후 실행이된다.
// c(() => {
//     console.log("1000ms후에 callback함수가 실행된다.");
// });

// c(() => {
//     c(() => {
//         c(() => {
//             console.log("3000ms후에 callback함수가 실행된다.");
//         });
//     });
// });
//---------------------
// /**
//  * fulfilled 되거나 rejected된 후에 최종적으로 실행할 것이 있다면, .finally(callback함수)를 설정하고, 함수를 인자로 넣는다.
//  */
// function p() {
//     return new Promise((resolve, reject) => {
//         /*pending */
//         setTimeout(() => {
//             reject(new Error("bad"));
//         }, 1000);
//     });
// }
// p()
//     .then((message) => {
//         console.log("1000ms후에 fulfilled된다.", message);
//     })

//     .catch((error) => {
//         console.log("1000ms후에 rejected된다.", error);
//     })
//     .finally(() => {
//         console.log("end");
//     });
//-------------------------
// /**
//  * 보통 reject함수를 실행하며 rejected되는 이유를 넘기는데, 표준 내장 객체인 Error의 생성자를 이용하여 Error
//  * 객체를 만들어보자
//  */
// function p() {
//     return new Promise((resolve, reject) => {
//         /*pending */
//         setTimeout(() => {
//             reject(new Error("bad")); //reject가 되었다.
//         }, 1000);
//     });
// }

// p()
//     .then((message) => {
//         console.log("1000ms후에 fulfilled된다.", message);
//     })
//     //보통 reason라고 '이유'가 넘어가게된다.
//     .catch((error) => {
//         console.log("1000ms후에 rejected된다.", error);
//     });
//-----------------------
/**
 * 마찬가지로, executor의 reject함수를 실행할 때 인자를 넣어 실행하면, catch의 callback함수의 인자로 받을 수 있다.
 * reject('error')
 * then((reason)=>{...})
 */
// function p() {
//     return new Promise((resolve, reject) => {
//         /*pending */
//         setTimeout(() => {
//             reject("error"); //reject가 되었다.
//         }, 1000);
//     });
// }

// p()
//     .then((message) => {
//         console.log("1000ms후에 fulfilled된다.", message);
//     })
//     //보통 reason라고 '이유'가 넘어가게된다.
//     .catch((reason) => {
//         console.log("1000ms후에 rejected된다.", reason);
//     });

//-----------------------------
// /**
//  * executor의 resolve 함수를 실행할때 인자를 넣어 실행하면, then의 callback함수의 인자로 받을 수 있다.
//  * resolve('hello')
//  * then((message)=>{...})
//  */
// function p() {
//     return new Promise((resolve, reject) => {
//         /*pending */
//         setTimeout(() => {
//             resolve("hello"); //메시지 혹은 객체 등 여러가지를 만들어서 보낼 수 있다.
//         }, 1000);
//     });
// }

// p()
//     //then함수안에서 비동기함수인 p가 성공한 후에, 뭔가 데이터를 받아서 넘겨주고싶다면
//     //then에 message라고 추가한 후,
//     .then((message) => {
//         //뒤에 message로 붙일 수 있다.
//         console.log("1000ms후에 fulfilled된다.", message);
//     })
//     .catch(() => {
//         console.log("1000ms후에 rejected된다.");
//     });

//-------------------------------
// /**
//  * 마찬가지로 프로미스 객체가 rejected되는 시점에 p.catch안에 설정한 callback함수가 실행된다.
//  */
// function p() {
//     return new Promise((resolve, reject) => {
//         /*pending */
//         setTimeout(() => {
//             reject(); /* rejected */
//         }, 1000);
//     });
// }

// p()
//     .then(() => {
//         console.log("1000ms후에 fulfilled된다.");
//     }) //<-!!! 여기로 가지않음
//     .catch(() => {
//         //콜백함수 작성
//         //1초뒤에 fullfilled되는것이 아닌, reject가 되므로 reject가 불리면 연결될 함수를 설정해줘야한다.
//         //체이닝이 가능한 형태이다.
//         console.log("1000ms후에 rejected된다.");
//     });

//---------------
// /**
//  * then을 설정하는 시점을 정확히하고,
//  * 함수의 실행과 동시에 프로미스 객체를 만들면서 pending이 시작하도록 하기 위해(타이밍 적절한 조절을 위함)
//  * 프로미스 객체를 생성하면서 리턴하는 함수(p)를 만들어 함수(p)실행과 동시에 then을 설정한다.
//  */

// function p() {
//     return new Promise((resolve, reject) => {
//         /*pending */
//         setTimeout(() => {
//             resolve(); /*fulfilled*/
//         }, 1000);
//     });
// }

// p().then(() => {
//     console.log("1000ms후에 fulfilled된다.");
// });

//--------------------
/**
 * p.then으로 callback 함수를 설정했기 때문에 fulfilled되면서 callback이 실행된다.
 */

// const p = new Promise((resolve, reject) => {
//     /*pending */
//     setTimeout(() => {
//         resolve(); /*fulfilled*/
//     }, 1000);
// });

// p.then(() => {
//     console.log("1000ms 후에 fulfilled된다.");
// });

//----------------------------
// /**
//  * p 라는 프로미스 객체가 fulfilled 되는 시점에 p.then안에 설정한 callback함수가 실행된다.
//  *
//  */
// const p = new Promise((resolve, reject) => {
//     /*pending */
//     setTimeout(() => {
//         resolve(); /*fulfilled*/
//     }, 1000);
// });

// //then이라는것을 언제 받게되냐?
// //resolve()가 호출된 fulfilled상태로 넘어가면 그때 then으로 넘어와서 then(...여기 함수) 가 실행된다.
// p.then(() => {
//     //이 부분은 위의
//     //   new Promise((resolve, reject) => {
//     //     /*pending */
//     //     setTimeout(() => {
//     //         resolve(); /*fulfilled*/
//     //     }, 1000);
//     // });
//     // 이 객체가 resolve()된 후에 실행되므로 1초 후에 실행된다.
//     //따라서 이 구간은
//     //일종의 여기는 /*callback*/ 을 작성하는 구간이다.
// });

//------------------
/**
 * (p 라는 프로미스 객체) 프로미스 객체를 만들고, 펜딩된 상태가 된 후에
 * 1000ms 후에 정상적으로 fulfilled 상태로 넘어가는 코드 작성
 */

// new Promise((resolve, reject) => {
//     /*pending */
//     setTimeout(() => {
//         resolve(); /*fulfilled*/
//     }, 1000);
// });

//-------------------
// /**
//  * 1.
//  * ES6 부터 JavaScript의 표준 내장 객체로 추가되었다.
//  * ES6 를 지원하는 브라우저나 Node.js에서 전역에 있는 Promise를 확인할 수 있다.
//  *
//  * Promise개체 혹은 Promiise객체라고 불린다.
//  */

// console.log(Promise);

// /**
//  * 2.
//  * 생성자를 통해서 (나만의)프로미스 객체를 만들 수 있다.
//  * 생성자의 인자로 executor라는 함수를 이용한다.
//  */

// new Promise(/* executor */);

// /**
//  * 3.
//  * executor함수는 resolve와 reject를 인자로 가집니다.
//  * (resolve, reject) => {...}
//  * resolve와 reject는 함수이다.
//  * resolve (), reject()
//  */

// new Promise(/* executor */ (resolve, reject) => {});

// /**
//  * 4.
//  * 생성자를 통해서 프로미스 객체를 만드는 순간 pending(대기) 상태라고 한다.
//  */

// new Promise((resolve, reject) => {}); //pending

// /**
//  * 5-1
//  * 이제 pending상태로 돌입한 후,
//  * executor함수 인자 중 하나인 resolve 함수를 실행하면, fulfilled(이행) 상태가 된다.
//  */

// new Promise((resolve, reject) => {
//     //이 객체가 생성되면 무조건 pending상태로 돌입하고
//     //...(비동기적 처리가 되는 상황벌어짐)
//     //그 이후 처리가 정상적으로 끝났을때
//     resolve(); //resolve라는 함수를 호출해주면 이 상태가 바로 fulfilled(이행된) 상태로 돌입된다.
// });

// /**
//  * 5-2
//  * executor함수 인자 중 하나인 reject함수를 실행하면, rejected(거부) 상태가 된다.
//  */

// new Promise((resolve, reject) => {
//     reject(); // rejected
// });
