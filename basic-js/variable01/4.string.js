//문자열타입
let string = '안녕하세요';
string =`안녕!`;
console.log(string);

//특수 문자 출력하는법
string = "'안녕!'";
console.log(string);

string = '안녕! \n은경아!\t\t내 이름은\\\u09AC';
console.log(string);

//템플릿 리터럴(Template Literal) ``
let id = '은경';
let gretings = "'안녕!," + id + "✋🏻\n즐거운 하루 보내요!'";
console.log(gretings);
gretings = `'안녕, ${id}✋🏻
즐거운 하루 보내요!'`;
console.log(gretings);