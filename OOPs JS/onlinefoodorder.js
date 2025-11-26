// Menu with item prices
const menu = {
  pizza: 250,
  burger: 120,
  momos: 100,
  pasta: 180,
  coffee: 90
};

// Function to calculate total bill
function calculateBill(orderItems) {
  // map() → get prices
  const prices = orderItems.map(item => {
    if (!menu[item]) {
      throw new Error(`Invalid item ordered: ${item}`);
    }
    return menu[item];
  });

  // reduce() → calculate total
  const total = prices.reduce((sum, price) => sum + price, 0);

  return total;
}

// Testing with valid order
try {
  const order = ["pizza", "burger", "coffee"];
  const billAmount = calculateBill(order);
  console.log("Order:", order);
  console.log("Total Bill:", billAmount);
} catch (err) {
  console.log("Error:", err.message);
}

// Testing with invalid order
try {
  const wrongOrder = ["pizza", "maggi"];
  const billAmount = calculateBill(wrongOrder);
  console.log("Total Bill:", billAmount);
} catch (err) {
  console.log("Error:", err.message);
}
