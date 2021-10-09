// 화살표 함수 표현식
var simpleAdd = function (x1, x2) {
    return x1 + x2;
};

var arrowAdd1 = (x1, x2) => {
    return x1 + x2;
};

//Rest Prameters(added in ES6) ...배열 형태로 전달된다.
var arrowAdd2 = (x1, x2) => x1 + x2;

function add(...nums) {
    var sum = 0;

    for (var n of nums) {
        sum += n;
    }

    return sum;
}

console.log(add(1, 2, 3, 5, 6, 7));

//----------------------------------------------------------------
