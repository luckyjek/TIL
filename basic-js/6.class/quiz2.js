// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간

// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원 

class Person {
    #value
    constructor(name, department, time) {  //5
        this.name = name;
        this.department = department;
        this.time = time;
    }
    
    get value() {
        return this.#value;
    }

    calculator = () => {
        if(this.department == '프론트엔드'){
            this.#value = this.time * 10000 //5*10000
        }else{
            this.#value = this.time * 8000 //5*8000
             
        }
    }
}

const fullTimePerson = new Person('피카츄', '프론트엔드', 5); //시간당 10000원
const partTimePerson = new Person('이상해씨', '백엔드', 5); //시간당 8000원

fullTimePerson.calculator();
partTimePerson.calculator();
console.log(fullTimePerson.value); //50000
console.log(partTimePerson.value); //40000
// console.log(partTimePerson.calculator());

console.log('-------------------------------------------------------------------------');

class Employee {
    constructor(name, department, hoursPerMonth, payRate) {
        this.name = name;
        this.department = department;
        this.hoursPerMonth = hoursPerMonth;
        this.payRate = payRate;
    }
    calculatePay() {
        return this.hoursPerMonth * this.payRate;
    }
}

class FullTimeEmployee extends Employee {
    static PAY_RATE = 10000;
    constructor(name, department, hoursPerMonth){
        super(name, department, hoursPerMonth, FullTimeEmployee.PAY_RATE);
    }
}

class PartTimeEmployee extends Employee {
    static PAY_RATE = 8000;
    constructor(name, department, hoursPerMonth){
        super(name, department, hoursPerMonth, PartTimeEmployee.PAY_RATE);
    }
}

const Elin = new FullTimeEmployee('엘린', 's/w', 30);
const bob = new PartTimeEmployee('밥', 's/w', 20);
console.log(Elin.calculatePay());
console.log(bob.calculatePay());
