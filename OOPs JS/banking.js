// Banking Application using Private Fields
class BankAccount {
  #balance = 0; // Private field

  constructor(initialBalance = 0) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive.");
    }
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be positive.");
    }
    if (amount > this.#balance) {
      throw new Error("Insufficient balance!");
    }
    this.#balance -= amount;
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }
}

// Testing
const account = new BankAccount(1000);

console.log("Initial Balance:", account.getBalance());

// Valid deposit
account.deposit(500);
console.log("After Deposit:", account.getBalance());

// Valid withdrawal
account.withdraw(300);
console.log("After Withdrawal:", account.getBalance());

// Invalid withdrawal (handled using try/catch)
try {
  account.withdraw(2000);
} catch (err) {
  console.log("Error:", err.message);
}
