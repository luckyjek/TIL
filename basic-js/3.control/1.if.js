// 조건문 Conditional Statement 
// if(조건) { }
// if(조건) { } else { }
// if(조건1) { } else if (조건2) { } else { }

let fruit = 'orange';
if(fruit === 'apple'){
    console.log('🍎');
}else if(fruit === 'orange'){
    console.log('🍊');
}else{
    console.log('🥰');
}

//if문안에 코드가 들어있을때,코드의 값이 true or false인지에 따라 코드블럭을 실행할지 안할지 '제어'가 가능.
if(2 < 1){
    console.log('출력되면 안됨!');
}