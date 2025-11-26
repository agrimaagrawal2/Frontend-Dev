// Sample Product Inventory
const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 3 },
  { id: 2, name: "Mouse", category: "Electronics", price: 800, stock: 15 },
  { id: 3, name: "T-Shirt", category: "Clothing", price: 600, stock: 2 },
  { id: 4, name: "Shoes", category: "Clothing", price: 1500, stock: 10 },
  { id: 5, name: "Mixer", category: "Home Appliances", price: 2500, stock: 1 },
  { id: 6, name: "Book", category: "Stationery", price: 300, stock: 20 }
];

// 1. Get products with low stock (stock < 5)
function getLowStockProducts() {
  return products.filter(p => p.stock < 5);
}

// 2. Sort products by price (ascending)
function sortProductsByPrice() {
  return [...products].sort((a, b) => a.price - b.price);
}

// 3. Total inventory value = sum of (price * stock)
function calculateTotalInventoryValue() {
  return products.reduce((total, p) => total + (p.price * p.stock), 0);
}

// 4. Group products by category
function groupByCategory() {
  return products.reduce((grouped, p) => {
    if (!grouped[p.category]) {
      grouped[p.category] = [];
    }
    grouped[p.category].push(p);
    return grouped;
  }, {});
}

// Testing all functions
console.log("Low Stock Products:", getLowStockProducts());
console.log("\nProducts Sorted by Price:", sortProductsByPrice());
console.log("\nTotal Inventory Value:", calculateTotalInventoryValue());
console.log("\nProducts Grouped by Category:", groupByCategory());
