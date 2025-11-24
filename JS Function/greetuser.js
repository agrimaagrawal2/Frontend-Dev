// Callback function
function showEndMessage() {
  console.log("Welcome to the course!");
}

// Function that accepts a callback
function greetUser(name, callback) {
  console.log("Hello " + name);

  // Execute callback after greeting
  if (typeof callback === "function") {
    callback();
  }
}

// Calling the function
greetUser("Mahi", showEndMessage);
