var txtElement = document.getElementById("txt");
var funInput = document.getElementById("fun");
var demoSpan = document.getElementById("demo");
var scrParagraph = document.getElementById("scr");
var secondsSpan = document.getElementById("seconds");
var startButton = document.getElementById("startBTN");
var userInput = document.getElementById("userInput");
var setTextButton = document.getElementById("setTextBTN");

var str = "";
var count = 0;
var cop = "";
var s = 0;
var timer;

function myFunction(event) {
    var x = event.which || event.keyCode;

    for (var i = s; i < str.length; i++) {
        if (x === str.charCodeAt(s)) {
            cop += str[s];
            count++;
            s++;
            scrParagraph.textContent = count;
            demoSpan.textContent = cop;
        }
    }
}

function countUp() {
    secondsSpan.textContent = parseFloat(secondsSpan.textContent) + 1;
    if (count === str.length) {
        clearInterval(timer);
    }
}

startButton.addEventListener("click", function() {
    startButton.style.display = "none";
    timer = setInterval(countUp, 1000);
});

setTextButton.addEventListener("click", function() {
    str = userInput.value;
    txtElement.textContent = str;
    count = 0;
    cop = "";
    s = 0;
    scrParagraph.textContent = count;
    demoSpan.textContent = cop;
    secondsSpan.textContent = "0 seconds";
    clearInterval(timer);
    startButton.style.display = "block";
});
