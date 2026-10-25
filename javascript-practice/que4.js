let scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

let highest = Math.max(...scores);
let lowest = Math.min(...scores);

let total = scores.reduce((sum, score) => sum + score, 0);
let average = total / scores.length;

let passed = scores.filter(score => score >= 50);

let updatedScores = scores.map(score => score);

console.log(`Student Scores: ${scores}`);
console.log(`Highest Score: ${highest}`);
console.log(`Lowest Score: ${lowest}`);
console.log(`Average Score: ${average.toFixed(2)}`);
console.log(`Students Passed: ${passed.length}`);
console.log(`Students Failed: ${scores.length - passed.length}`);
console.log(`All Scores: ${updatedScores}`);

