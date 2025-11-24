// Arrow function example where `this` is undefined
const user1 = {
  name: "John",
  showName: () => {
    console.log("Arrow Function:", this.name); // undefined
  }
};

user1.showName();

// Correct example using normal function
const user2 = {  name: "John",
  showName() {
    console.log("Normal Function:", this.name); // John
  }
};

user2.showName();

