let count = 0;

function increment() {
count++;
console.log("Incremented Count: " + count);
}

function decrement() {
count--;
console.log("Decremented Count: " + count);
}

// Nested function to demonstrate scope
function counterDetails() {
console.log("Current Count: " + count);

```
function showCount() {
    console.log("Count inside nested function: " + count);
}

showCount();
```

}

// Simulate click events
increment();
increment();
increment();
decrement();
counterDetails();
