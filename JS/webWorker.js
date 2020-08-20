let i = 0;

function timedCount() {
    i++;
    postMessage(i+"GGGG");
    setTimeout(timedCount, 1000);
}

timedCount();
// setInterval(timedCount, 1000);