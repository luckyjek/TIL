// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
// 매개변수 기본값 Default Parameters a = 1, b = 1

function add(a =1, b = 1){
    console.log(a);
    console.log(b);
    console.log(arguments); //[Arguments] { '0': 1, '1': 2, '2': 3 } 이렇게 하기보다는, 주어진 매개변수 이름을 이용해서 출력한다.
    // console.log(arguments[0]);
    // console.log(arguments[1]);
    return a + b;
}
// add(1,2,3); 
add(); 

//Rest 매개변수 (Rest Parameters)
function sum(a, b, ...numbers){ //첫번째 인자와 두번째 인자는 각각 a, b로 받고 나머지는numbers라는 이름으로 배열로 받을래!
    console.log(a);
    console.log(b);
    console.log(numbers);
}

sum(1,2,3,4,5,7,8);