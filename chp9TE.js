var tick = true;

function ticker() {
    if(tick) {
        console.log("Tick...");
        tick = false;
    } else {
        console.log("Tock...");
        tick = true;
    }
}

setInterval(ticker, 1000);

/*
function timerHandler() {
    alert("Hey! What are you doing just sitting there staring at a blank screen?");
    setTimeout(timerHandler,1000);
}

setTimeout(timerHandler,1000);
*/