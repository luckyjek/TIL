const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.querySelector(".modal-wrapper");
console.log(open);
console.log(close);
open.onclick = () => {
    modal.style.display = "flex";
};
close.onclick = () => {
    modal.style.display = "none";
};

// const number = document.getElementById("number");
// const buttons = document.querySelectorAll("button");
// const [increase, decrease] = buttons;

// increase.onclick = () => {
//     const current = parseInt(number.innerText, 10); //10진수로 표현
//     number.innerText = current + 1;
//     console.log("increase가 클릭됨");
// };

// decrease.onclick = () => {
//     const current = parseInt(number.innerText, 10); //10진수로 표현
//     number.innerText = current - 1;
//     console.log("decrease가 클릭됨");
// };
