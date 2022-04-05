//사용예제 1
function sum(num1, num2){
    // const result = num1 + num2;
    console.log('function');
    return num1 + num2 ;
}

const result = sum(1,2);
console.log(result);

//사용예제 2
function fullName(firstName, lastName){
    return `${lastName} ${firstName} 🌸`;
}

let lastName = '김';
let firstName = '지수';
// let fullName = `${lastName} ${firstName}`;
console.log(fullName(lastName, firstName));

let lastName2 = '박';
let firstName2 = '철수';
console.log(fullName(lastName2, firstName2));