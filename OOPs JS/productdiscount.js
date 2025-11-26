// Product Constructor Function
function Product(name, price) {
  this.name = name;
  this.price = price;
}

// Prototype method to apply discount
Product.prototype.applyDiscount = function (percent) {
  const discount = (this.price * percent) / 100;
  const finalPrice = this.price - discount;
  return finalPrice;
};

// Creating 3 products
const p1 = new Product("Laptop", 50000);
const p2 = new Product("Headphones", 2000);
const p3 = new Product("Smartphone", 30000);

// Applying discounts
console.log("Laptop after 10% discount:", p1.applyDiscount(10));
console.log("Headphones after 20% discount:", p2.applyDiscount(20));
console.log("Smartphone after 15% discount:", p3.applyDiscount(15));

// Abstraction explanation
console.log("\nAbstraction:");
console.log(
  "We simply call applyDiscount(percent) without worrying about how the discount is calculated internally."
);
