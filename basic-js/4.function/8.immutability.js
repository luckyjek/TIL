// 함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 💩
// 상태변경이 필요한 경우에는, 새로운 상태를 (오브젝트, 값) 만들어서 반환해야 함 ✨
// 원시값 - 값에 의한 복사 (큰 문제가 되지는 않지만 객체에서 문제가됨)
// 객체값 - 참조에 의한 복사 (메모리주소)

function display(num){
    num = 5; //❌
    console.log(num);
}

const value = 4;
display(value);
console.log(value);

//--------------------------------

function displayObj(obj){
    //보여준다고만 하는 함수인데, 갑자기 엉뚱하게 내부에서 name을 바꾼다면 ? 
    obj.name = 'Bob'; // ❌❌❌❌❌❌❌❌ 외부로 부터 주어진 인자(특히 오브젝트✨)를 내부에서 변경 ❌
    console.log(obj); //{ name: 'Bob' }
}

const elin = {name: 'Elin'};
displayObj(elin); 


function changeName(obj){ 
    return {...obj, name: 'Bob'}; // 반환할때는 새로운 오브젝트 만들기!
}