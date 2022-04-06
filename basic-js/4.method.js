//객체는 연관된 정보와 함수를 묶어서 관리할 수 있다.
const apple = {
    name: 'apple',
    display: function(){
        console.log(`${this.name} 🍎`);
    }
}

apple.display();