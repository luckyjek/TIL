function loop() {
    const array = [];
    // var과 let의 차이점!
    for (let i = 0; i < 5; i++){
        array.push(function(){
            console.log('let :console.log함수안에 들어가있음',i);
        });
        console.log(i);
    }
    console.log(array);
    return array;
}

// function loop() {
//     const array = [];
//     var i;
//     for (i = 0; i < 5; i++){
//         array.push(function(){
//             console.log('var : console.log함수안에 들어가있음',i);
//         });
//         console.log(i);
//     }
//     return array;
// }

const array = loop();
array.forEach((func) => func());