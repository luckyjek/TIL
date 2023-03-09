// 객체란, 아래와 같이 서로 연관있는 속성과 행동을 묶어둔것이다.
const apple = {
    name: 'apple',
    display: function(){ //자기 자신에 대한 정보를 출력할 수 있는 함수.
        console.log(`${this.name} : 🍎`);
    }
}

apple.display();