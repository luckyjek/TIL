// 시간계산
var now = new Date();
 
// 현재시간 
var year = now.getFullYear();     // 연도
var month = now.getMonth()+1;     // 월                             
var day = now.getDate();          // 일
var hours = now.getHours();       // 현재 시간
var minutes = now.getMinutes();   // 현재 분
 
// 비교시간
var sttDt = "2021-3-27";
sttDt = sttDt.split("-");
var sttYear = sttDt[0];
var sttMonth = sttDt[1];
var sttDay = sttDt[2];
console.log(sttYear,sttMonth,sttDay)
 
var sttHours = "03";
var sttMinutes = "30";
 
var date1 = new Date(year, month, day, hours, minutes);                    // 현재 
var date2 = new Date(sttYear, sttMonth, sttDay, sttHours, sttMinutes);     // 파라미터
console.log('date1,date2:', date1, date2)
 
console.log( date2.getTime())
console.log( date1.getTime())
var elapsedMSec = date2.getTime() - date1.getTime(); 
console.log('elapsedMSec',elapsedMSec)
var elapsedMin = elapsedMSec / 1000 / 60; 
 
elapsedMin = parseInt(elapsedMin);    // 정수 표기를 위해 parseInt   
console.log('elapsedMin', elapsedMin);