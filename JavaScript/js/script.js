var currentnumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;

function increment(){
    currentNumber +=  +1;
    currentnumberWrapper.innerHTML = currentNumber
}

function decrement(){
    currentNumber += -1;
    currentnumberWrapper.innerHTML = currentNumber
}