let myHamsterComtainer = document.getElementsByClassName('hamster')[0];
let myPits = myHamsterComtainer.getElementsByTagName('input');
let myLabels = myHamsterComtainer.getElementsByTagName('label');
let myScore = document.getElementById('score').querySelector('label');
let gameTimer = null;

function startHamster() {
    if(gameTimer === null) {
        checkedPit();
        gameTimer = setInterval(checkedPit, 3000);
    }
}
function stopHamster() {
    clearInterval(gameTimer);
    myScore.innerHTML = 0;
    [].forEach.call(myPits, item => {
        item.checked = false;
    });
    gameTimer = null;
}
function checkedPit() {
    let index = Math.floor(Math.random()*9);
    while(myPits[index].checked) {
        index = Math.floor(Math.random()*9);
    }
    myPits[index].checked = true;
    setTimeout(function() {
        myPits[index].checked = false;
    }, 4000);
}
function hitHamster(event, value) {

    if(event.target.checked) {
        event.target.checked = false;
    } else {
        myScore.innerHTML++;
        myLabels[value].style.background = "url(../img/hamster/boom.png)  no-repeat"
        myLabels[value].style.backgroundSize = "150% 150%";
        myLabels[value].style.backgroundPosition = "center center";
    }
    setTimeout(function() {
        myLabels[value].style.background = ""
        myLabels[value].style.backgroundSize = "";
        myLabels[value].style.backgroundPosition = "";
    }, 250)
}