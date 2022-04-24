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
    console.log(e.clientX, e.clientY);
    handElem.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
}
worldElem.addEventListener('click', clickHandler);
window.addEventListener('mousemove', moveHandler);