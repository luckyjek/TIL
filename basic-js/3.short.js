//객체 축약 버전
const x = 0;    
const y = 0;
const coordinate = {x, y}; //{ x: x, y: y};
console.log(coordinate);

function makeObj(name, age){
    return{
        // name: name,
        // age : age,
        name,
        age
    }
}

console.log(makeObj('Elin', 12));