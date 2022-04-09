//접근자 프로퍼티 (Accessor Property)
class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return `${this.lastName} ${this.firstName}`;
    }

    set fullName(value){
        console.log('set', value);
    }
}

const student = new Student('수지', '김');
console.log(student.firstName);
console.log(student.fullName);// 이름이라는 상태를 얻는건데, 함수처럼 호출하니까 조금이상.

student.firstName = '안나';
console.log(student.firstName);
console.log(student.fullName);

student.fullName = '김철수';