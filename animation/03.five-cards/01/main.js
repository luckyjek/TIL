const worldElem = document.querySelector('.world');
const handElem = document.querySelector('.hand');
function clickHandler(e){
    const targetElem = e.target;
    // targetElem.setAttribute('data-flip', 'true');

    if(targetElem.classList.contains('world')){
        return;
    }
    if(targetElem.dataset.flip === 'false'){
        targetElem.dataset.flip = 'true';
    } else {
        targetElem.dataset.flip = 'false';
    }
}

function moveHandler(e) {
    // console.log(e.clientX, e.clientY);
    handElem.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
}

function touchHandler(e) {
    console.log(e.touches[0].clientX, e.touches[0].clientY);
    handElem.style.transform = `translate(${e.touches[0].clientX}px, ${e.touches[0].clientY}px)`;
}

worldElem.addEventListener('click', clickHandler);
window.addEventListener('mousemove', moveHandler);
window.addEventListener('mousedown', () => {
    document.body.classList.add('mousedown');
});
window.addEventListener('mouseup', () => {
    document.body.classList.remove('mousedown');
});

//터치 기기에서는 어떻게 해야될까?
//touchstart, touchend
window.addEventListener('touchmove', touchHandler);