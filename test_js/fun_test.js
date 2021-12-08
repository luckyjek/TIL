
// 문자열 #로 split하고 empty element 제거
var tagFilter = function () {
    var tag = "#서울#양평#한경닷컴#개발의품격#잘한다";
    var tagArr = tag.split("#");
    console.log(tagArr);

    // filter empty element
    console.log(tagArr.filter((e) => e));
};

// endWith() 활용
var imgFilter = function () {
    var isRightImageExtension = imageFile.endsWith(".jpg")
        ? true
        : imageFile.endsWith(".png")
        ? true
        : false;
    console.log(isRightImageExtension);

    var imageFile = "logo.jpg";
    if (imageFile.endsWith(".jpg") || imageFile.endsWith(".png")) {
        console.log(imageFile);
    }
};

var sorter = function (arr) {
    arr.sort(function (a, b) {
        return a - b;
    });
};

// reduce() 활용
var total = points.reduce(function (sum, currentValue) {
    return sum + currentValue;
});

// reduce arrow version
var total = points.reduce((sum, currentValue) => sum + currentValue);

// interval date 구하는 함수
// var output = getIntervalDate2(-7, "YYYY-MM-DD");
var getIntervalDate = function (intervalDay, format) {
    let interval = 24 * 60 * 60 * 1000 * intervalDay;
    let now = new Date();

    let d = new Date(now.getTime() + interval);

    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();

    return format
        .replace("YYYY", year)
        .replace("MM", month.toString().padStart(2, "0"))
        .replace("DD", day);
};

let person = {
    firstName: "John",
    lastName: "Doe",
    getFullName: this.firstName + " " + this.lastName,
};

// object로 set 자료형 구현하기 *
var setObject = function (userList) {
    for (var user of userList) {
        if (oUser[user.gender]) {
            oUser[user.gender]++;
        } else {
            var oUserGender = user.gender;

            // gender 데이터를 key값으로 저장
            oUser[oUserGender] = 1; // or oUser[user.gender] = 1;
            console.log(oUser);
        }
        break;
    }
};

var getSpecificGroup = function (userList, keyAge) {
    let myMap = new Map();

    for (let user of userList) {
        var ageFirtStr = user[keyAge].toString()[0];
        var ageGroup = ageFirtStr.padEnd(2, "0");

        // 2가 올텐데..
        if (myMap.has(ageGroup)) {
            myMap.set(ageGroup, myMap.get(ageGroup) + 1);
        } else {
            myMap.set(ageGroup, 1);
        }
    }

    return myMap;
};

function getScores() {
    return [70, 80, 90];
}

let [x, y, z] = getScore();

// basic promise by axios
function getData(_url) {
    return new Promise(function (resolve, reject) {
        axios.get(_url).then(function (res) {
            console.log(res.data);
            resolve(res.data);
        });
    });
}

/* 
<script type="module">
  import {log, err, PI} from "/scripts/test.js";
  log(PI);
</script> 
*/

const condition = true; // true -> resolve, false -> reject
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve("success");
    } else {
        reject("failure");
    }
});

// 더 간단하게
var sayNode = function () {
    console.log("Node");
};
var es = "ES";

const newObject = {
    sayJS() {
        console.log("JS");
    },
    sayNode,
    [es + 6]: "Fantastic",
};
newObject.sayNode(); // Node
newObject.sayJS(); // JS
console.log(newObject.ES6); // Fantastic

const promise1 = Promise.resolve("성공1");
const promise2 = Promise.resolve("성공2");
(async () => {
    for await (promise of [promise1, promise2]) {
        console.log(promise);
    }
})();
