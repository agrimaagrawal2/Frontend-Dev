// Student Result Processing using Classes + reduce()

class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  // calculate average using reduce()
  calculateAverage() {
    let sum = this.marks.reduce((total, m) => total + m, 0);
    return sum / this.marks.length;
  }

  // return grade based on average
  getGrade() {
    let avg = this.calculateAverage();

    if (avg >= 90) return "A";
    else if (avg >= 75) return "B";
    else if (avg >= 50) return "C";
    else return "F";
  }

  // display result
  printResult() {
    console.log(`Name: ${this.name}`);
    console.log(`Marks: ${this.marks}`);
    console.log(`Average: ${this.calculateAverage().toFixed(2)}`);
    console.log(`Grade: ${this.getGrade()}`);
    console.log("------------------------------");
  }
}

// Test for 3 students
let s1 = new Student("Amit", [85, 92, 88, 90]);
let s2 = new Student("Riya", [70, 65, 58, 72]);
let s3 = new Student("Karan", [40, 35, 50, 45]);

s1.printResult();
s2.printResult();
s3.printResult();
