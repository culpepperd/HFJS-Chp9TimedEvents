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

var t = setInterval(ticker, 1000);

setTimeout(timerHandler, 5000);

function timerHandler() {
    // var t = setInterval(ticker, 1000);
    clearInterval(t);
}
/*
function tickCount(){
    for(var i = 0; i < 10; i++) {
        if(i < 10){
            
        } else {
            var t = setInterval(ticker, 1000);
            clearInterval(t);
        }
    }
}
*/

/*
function timerHandler() {
    alert("Hey! What are you doing just sitting there staring at a blank screen?");
    setTimeout(timerHandler,1000);
}

setTimeout(timerHandler,1000);
*/