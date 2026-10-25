const cart = [
{ item: "Laptop", category: "electronics", price: 45000 },
{ item: "Shoes", category: "fashion", price: 2500 },
{ item: "Book", category: "education", price: 600 }
];

let total = cart.reduce((sum, product) => sum + product.price, 0);
let discountedTotal = 0;

for (let product of cart) {
let discount = 0;

if (product.category === "electronics") {
    discount = 10;
} else if (product.category === "fashion") {
    discount = 5;
}

let discountAmount = (product.price * discount) / 100;
let finalPrice = product.price - discountAmount;

discountedTotal += finalPrice;

console.log(`Item: ${product.item}`);
console.log(`Original Price: ₹${product.price}`);
console.log(`Discount: ${discount}%`);
console.log(`Final Price: ₹${finalPrice}`);
console.log("----------------------");

}

let extraDiscount = 0;

if (total > 50000) {
extraDiscount = 5;
}

let extraDiscountAmount = (discountedTotal * extraDiscount) / 100;
let finalTotal = discountedTotal - extraDiscountAmount;

console.log(`Original Cart Total: ₹${total}`);
console.log(`Total After Item Discounts: ₹${discountedTotal}`);
console.log(`Extra Discount: ${extraDiscount}%`);
console.log(`Final Cart Total: ₹${finalTotal}`);
