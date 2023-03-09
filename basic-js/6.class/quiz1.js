// Class, Object 이런것들은 서로 밀접하게 연관되어있는 속성과 행동들을 
// 하나의 Object, Class 단위로 묶어나가는 연습
// 즉, 객체로 바라보는 , 객체로 사고하는 것들이 중요하다!  -> 이렇게 프로그래밍하는 것이 중요하다.



// quiz1. 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤, 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// Counter 클래스 만들기

class Counter1 {
    #value;
    constructor(startValue) {
        if( isNaN(startValue)|| startValue < 0) {
            this.#value =0; // 0으로 초기화해준다.
        }else {
            this.#value = startValue;
        }
    }

    get value() {
        return this.#value;
    }

    increment = () => {
      this.#value++;
    }
}


const count = new Counter1(-3);
count.increment();
count.increment();
console.log(count.value); // 사용자가 value라는 속성을 통해 현재 값을 확인할 수 있도록 만들어준다.


// class Counter {
//     constructor(num){
//         if( num < 0) return console.log('0 이상의 값을 입력해주세요.');
//         this.num = num
//     }
//     count(){
//         for(let i = 0; i < this.num; i++){
//             console.log(i);
//         }
//     }
    
// }
// const conunter = new Counter(5);
// console.log(conunter.num);
// conunter.count()

// class Counter {
//     #value;
//     constructor(startValue) { 
//         if (isNaN(startValue) || startValue < 0 ) {
//             this.#value = 0;
//         } else {
//             this.#value = startValue;
//         }
//     }

//     get value() {
//         return this.#value;
//     }

//     increment = () => {
//         this.#value++;
//     }
// }


class Counter {

    constructor(startValue) { 
        if (isNaN(startValue) || startValue < 0 ) {
            this.value = 0;
        } else {
            this.value = startValue;
        }
    }
    // get value() {
    //     return this.value;
    // }

    increment = () => {
        this.value++;
    }
}

const counter  = new Counter(5);
counter.increment(); //1
counter.increment(); //2
counter.increment(); //3
counter.increment(); //4
console.log(counter.value);