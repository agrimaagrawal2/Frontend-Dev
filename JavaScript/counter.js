let count = 0;
const display = document.getElementById('display');


function cnt() {  
    display.textContent = count;
}

cnt();

function increment() {
  count++;
  cnt();
}

function decrement() {
  count--;
  cnt();
}

function add() {
  count+=2;
  cnt();
}