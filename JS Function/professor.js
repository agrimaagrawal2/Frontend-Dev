// Person Constructor (Base)
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  console.log("Name:", this.name);
};


// Faculty Constructor (Child of Person)
function Faculty(name, department) {
  Person.call(this, name);
  this.department = department;
}

// Inherit prototype from Person
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.getDepartment = function () {
  console.log("Department:", this.department);
};


// Professor Constructor (Child of Faculty)
function Professor(name, department, subject) {
  Faculty.call(this, name, department);
  this.subject = subject;
}

// Inherit prototype from Faculty
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.getSubject = function () {
  console.log("Subject:", this.subject);
};


// Creating Professor Object
let p1 = new Professor("Dr. Sharma", "Engineering", "Data Structures");


// Calling Methods (Prototype Chain Demo)
p1.getName();        // From Person
p1.getDepartment();  // From Faculty
p1.getSubject();     // From Professor


// Prototype Chain Check
console.log(p1.__proto__ === Professor.prototype);              
console.log(Professor.prototype.__proto__ === Faculty.prototype);
console.log(Faculty.prototype.__proto__ === Person.prototype);  
console.log(Person.prototype.__proto__ === Object.prototype);
