let feedback = "Great product! Fast delivery and amazing sound quality!";

// Count words
let words = feedback.split(" ");
let wordCount = words.length;

// Check for negative words
if (feedback.includes("bad") || feedback.includes("poor")) {
console.log("Needs Improvement");
} else {
console.log("Positive Feedback");
}

// Display feedback details
console.log("Customer Feedback: " + feedback);
console.log("Word Count: " + wordCount);
