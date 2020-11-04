let step = 0;
let myCarousel = document.querySelector('.carousel');
let myWrapper = document.getElementsByClassName("wrapper")[0];
let mySpan = document.querySelectorAll('span');

renderPagination();
autoMove();

function autoMove() {
    let timer = setInterval(rightMove, 1500);
    myCarousel.onmouseenter = function() {
        clearInterval(timer);
    }
    myCarousel.onmouseleave = function() {
        timer = setInterval(rightMove, 1500);
    } 
}
function renderPagination() {
    mySpan.forEach((item, index) => {
        if(index === step%3){
            item.className = 'paginationPoint active';
        } else {
            item.className = 'paginationPoint';
        }
    })
}
function leftMove() {
    step--;
    if(step < 0) {
        step = 3;
        myWrapper.style.transitionDuration = '0ms';
        myWrapper.style.left = `${-step*400}px`;
        myWrapper.offsetLeft;
        step--;
    }
    myWrapper.style.transitionDuration = '300ms';
    myWrapper.style.left = `${-step*400}px`;
    renderPagination();
}
function rightMove() {
    step++;
    if(step > 3) {
        step = 0;
        myWrapper.style.transitionDuration = '0ms';
        myWrapper.style.left = `${-step*400}px`;
        myWrapper.offsetLeft;
        step++;
    }
    myWrapper.style.transitionDuration = '300ms';
    myWrapper.style.left = `${-step*400}px`;
    renderPagination();
}