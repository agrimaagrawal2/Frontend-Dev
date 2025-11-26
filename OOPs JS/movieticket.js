// Base Class: MovieTicket
class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

// Adding method to prototype (NOT inside class)
MovieTicket.prototype.printTicket = function () {
  console.log(
    `Movie: ${this.movieName}, Seat: ${this.seatNo}, Price: ₹${this.price}`
  );
};

// Derived Class: OnlineTicket
class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }

  // Method to get final amount
  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

// Creating Online Tickets
const ticket1 = new OnlineTicket("Avengers", "A12", 250, 30);
const ticket2 = new OnlineTicket("KGF 3", "B19", 300, 40);

// Using getTotalAmount()
console.log("Total Amount (Ticket 1):", ticket1.getTotalAmount());
console.log("Total Amount (Ticket 2):", ticket2.getTotalAmount());

// Calling prototype method from parent using OnlineTicket object
console.log("\nPrinting Tickets (Prototype Chain Demonstration):");
ticket1.printTicket();
ticket2.printTicket();
