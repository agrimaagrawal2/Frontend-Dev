// Adding custom map method to Array prototype
Array.prototype.myMap = function (callback) {
  let result = [];

  // 'this' refers to the array on which myMap is called
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};

// Usage Example
arr = [1, 2, 3];

doubled = arr.myMap(num => num * 2);
console.log(doubled); // Output: [2, 4, 6]

// Another Example
squared = arr.myMap(num => num * num);
console.log(squared); // Output: [1, 4, 9]
