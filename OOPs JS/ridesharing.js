// Base Class: User
class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

// Derived Class: Driver
class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle;
  }
}

// Trip Class
class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  // Method to calculate fare
  calculateFare() {
    if (this.distance === undefined || this.distance < 0) {
      throw new Error("Invalid distance! Distance must be a positive number.");
    }

    const ratePerKm = 12; // Example rate
    return this.distance * ratePerKm;
  }
}

// Creating objects
const user = new User("Amit", 4.6);
const driver = new Driver("Rohit", 4.9, "Honda City");

// Valid Trip
try {
  const trip1 = new Trip("Delhi", "Gurgaon", 25);
  console.log("Fare for Trip 1:", trip1.calculateFare());
} catch (err) {
  console.log("Error:", err.message);
}

// Invalid Trip (negative distance)
try {
  const trip2 = new Trip("Noida", "Agra", -10);
  console.log("Fare for Trip 2:", trip2.calculateFare());
} catch (err) {
  console.log("Error:", err.message);
}
