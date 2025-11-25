// Function 1: Boil Water
function boilWater() {
  return new Promise((resolve, reject) => {
    console.log("Boiling water...");

    setTimeout(() => {
      if (Math.random() < 0.2) {      // 20% chance of failure
        reject("Failed to boil water!");
      } else {
        resolve("Water boiled.");
      }
    }, 1500);
  });
}

// Function 2: Brew Coffee
function brewCoffee() {
  return new Promise((resolve, reject) => {
    console.log("Brewing coffee...");

    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject("Failed to brew coffee!");
      } else {
        resolve("Coffee brewed.");
      }
    }, 1500);
  });
}

// Function 3: Pour into Cup
function pourCoffee() {
  return new Promise((resolve, reject) => {
    console.log("Pouring coffee...");

    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject("Failed to pour coffee!");
      } else {
        resolve("Coffee poured.");
      }
    }, 1500);
  });
}

// Promise Chaining
boilWater()
  .then((msg) => {
    console.log(msg);
    return brewCoffee();
  })
  .then((msg) => {
    console.log(msg);
    return pourCoffee();
  })
  .then((msg) => {
    console.log(msg);
    console.log("Coffee ready for the team!");
  })
  .catch((error) => {
    console.log("Error:", error);
    console.log("Coffee process failed. Try again!");
  });
