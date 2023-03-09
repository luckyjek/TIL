// 접근제어자 - 캡슐화 가능  (내부 사항으로 필요한 데이터를 외부에서 보이지 않도록 캡슐화 해놓는 숨겨놓는 느낌.)
// private(#), public(기본), protected

class Fruit {
    // 여기를 바로 filed라 한다.
    #name;
    #emoji;
    #type = '과일';

    constructor(name, emoji){
    this.#name = name;
    this.#emoji = emoji;
}
  
    #display = () => {
        console.log(`${this.#name} ${this.#emoji}`);
    };
}

const apple = new Fruit('apple', '🍎');
//apple.#name = '오렌지'; //#field는 외부에서는 접근이 불가능함.
console.log(apple);