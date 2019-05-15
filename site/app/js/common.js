$(function() {

	// Custom JS

});

function startTimer(duration, display1, display2, display3, display4) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display1.textContent = minutes; 
        display2.textContent = seconds;
        display3.textContent = minutes; 
        display4.textContent = seconds;

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display1 = document.querySelector('#time');
        display2 = document.querySelector('#time2');
        display3 = document.querySelector('#time3');
        display4 = document.querySelector('#time4');
    startTimer(fiveMinutes, display1, display2, display3, display4);
};
