'use strict';
// function add(num1, num2) {
//     return num1 + num2
// }

// const doSomething = add;

// const result = doSomething(2, 3);
// console.log(result);
// const result2 = add(2, 5);
// console.log(result2);

function add(num1, num2) {
    return num1 + num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

//operator라는 인자의 이름은 surprize라는 함수를 호출하는 사람이 전달하는 데이터를 담고있는데,
//여기에서는 add라는 함수의 ref가 전달이되었다.그래서 그 ref를 이용해서 함수를 호출한것이다.
//그리고 operator가 가르키고있는 add라는 함수는 인자로 2개를 받기 때문에 2,3와 함을 전달해주었다.

//또, 인자의 이름은 우리가 정하는 인자의 이름과 똑같다. function surprise(callback) {...}
function surprise(operator) { //add의 ref가 복사돼서 전달된다.
    const result = operator(1, 3); //받아온 인자를 '();'로 실행'을 시켜줘야된다. 따라서 얘는 add(2,3 )힌거랑 같다.
    console.log(result);
}
// surprise(add(2, 3)) X 땡!!!!!!
//함수의 이름을 변수에 할당하거나 또는 다른 함수에 인자로 전달한다는 것은 함수의 이름을 
//여기저기 전달 한다는것은 이름이 가르키고있는, 함수의 refrence를 전달하는것과 같다.
//그래서 이름을 통해서 함수를 호출할 수 있는것이다.

//정리 : 함수를 전달한다는것은 함수를 가르키고있는 (사실) ref가 복사돼서 전달되는것이다.
//그래서 전달된 ref를 일반함수를 호출하는것처럼 ()를 이용해서 호출할 수 있다.
surprise(divide);

//----------------------------------------------------------------------
/**
 * Counter 자체는 숫자가 5배가 될때마다 어떤 동작을 하는지는 자체적으로 결정되어있지는않다.
 * 그래서 사용하는 사람이원할때 이런 기능을 전달하게되면 수행하는것이다.
 */
class Counter {

    /**
     * coolCounter.increase(printSomething);라고 계속 10번씩넣기 불편하니까,
     * 처음 constructor애 콜백함수를 받는다. constructor또한 함수이기때문에, 
     * 함수에 인자로 받아온 아이들을 class자체에서 기억해야 되기 떄문에 this.callback 저장.
     */
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }

    increase() {
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            // runIf5Times();
            //callback호출 -숫자를 정확하게 알고싶어서, this.counter를 전달해주었다.
            // this.callback(this.counter); //이 callback은 결국 printSometing이라는것을 가리키고있다.
            if (this.callback) {
                //undefined가 아닐때만 callback을 부른다.
                //즉, 이 class를 만들때 만드는 사용자가 콜백함수를 등록했으면 호출을해주고,
                //등록된 콜백함수가 없다면, 호출하면안된다. 그래서 this.callback에 true이면
                //즉 콜백이 undefined이 아닐때, 콜백이 있다면 실행해준다.
                this.callback && this.callback(this.counter);
                // if (this.callback) {
                //     this.callback(this.counter);
                // }
            }
        }
    }
}

//callback함수를 전달하기위한 함수를 작성 ->이를사용해서 우리가 원하는기능을 수행할수이게한다.
function printSomething(num) {
    console.log(`WoW!${num}`);
}

//alertNum callback함수
function alertNum(num) {
    alert(`WoW!${num}`);
}

//class를 이용해서 Object를 만든다. 
//그리고 Counter를 만들때, 생성자에 원하는 콜백함수를 전달해준다. 그런데 이때, 
//어떤 콜백도 전달하지않으면 constructor(runEveryFiveTimes) 는 undefinde가 될것이다.
//즉, this.callback은 undefined가된다. ->그럼 TypeError가된다.
const printCounter = new Counter(printSomething);
// const alertCounter = new Counter(alertNum);

//increase할때마다 callback함수를전달한다.
//->그럼 당연히 전달된 함수는 숫자가 5배일 때만 호출이될것이다.
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase(); //5
printCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase(); //10