function makeMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const triple = makeMultiplier(3);
console.log(triple(5)); // Output: 15

double = makeMultiplier(2);
console.log(double(10)); // Output: 20

// Explanation
console.log("Closure keeps 'multiplier' alive even after makeMultiplier returns.");
