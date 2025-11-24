// Callback functions
function double(num) {
  return num * 2;
}

function square(num) {
  return num * 2;
}

// Higher-order function
function applyOperation(numbers, operation) {
  let result = [];

  for (let num of numbers) {
    result.push(operation(num)); // applying callback
  }

  return result;
}

// Usage
let arr = [1, 2, 3, 4];

let doubled = applyOperation(arr, double);
let squared = applyOperation(arr, square);

console.log("Doubled:", doubled);
console.log("Squared:", squared);
