
// Person Constructor (Parent)

function Person(name) {
  this.name = name;
}

// Prototype method (Parent)
Person.prototype.getName = function () {
  console.log("Name:", this.name);
};


// Student Constructor (Child)

function Student(name, branch) {
  // inherit properties from Person
  Person.call(this, name);
  this.branch = branch;
}

// Inherit prototype from Person
Student.prototype = Object.create(Person.prototype);

// Fix constructor reference
Student.prototype.constructor = Student;

// Child prototype methods
Student.prototype.getBranch = function () {
  console.log("Branch:", this.branch);
};

Student.prototype.getDetails = function () {
  console.log(`Name: ${this.name}, Branch: ${this.branch}`);
};


// Creating Objects

let s1 = new Student("Rahul", "Computer Science");
let s2 = new Student("Mahi", "Mechanical");


// Calling Methods

console.log(" Student 1 ");
s1.getName();     // From Person prototype
s1.getBranch();   // From Student prototype
s1.getDetails();  // Combined method

console.log(" Student 2 ");
s2.getName();
s2.getBranch();
s2.getDetails();


// Prototype Chain Check

console.log("\n  Prototype Chain ");
console.log(s1.__proto__ === Student.prototype);                // true
console.log(Student.prototype.__proto__ === Person.prototype);  // true
console.log(Person.prototype.__proto__ === Object.prototype);   // true
