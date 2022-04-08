// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤, 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// Counter 클래스 만들기

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

const counter  = new Counter(0);
counter.increment(); //1
counter.increment(); //2
counter.increment(); //3
console.log(counter.value);