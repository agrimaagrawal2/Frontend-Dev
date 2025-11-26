// Base Class: Employee
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    return `${this.name} is working in the ${this.department} department.`;
  }
}

// Derived Class: Manager
class Manager extends Employee {
  constructor(name, department) {
    super(name, department);
  }

  // Overriding work() → runtime polymorphism
  work() {
    return `${this.name} is managing the ${this.department} department.`;
  }
}

// Creating objects
const emp = new Employee("Rahul", "HR");
const mgr = new Manager("Neha", "IT");

// Runtime Polymorphism
console.log(emp.work());   // Employee version
console.log(mgr.work());   // Manager overridden version
