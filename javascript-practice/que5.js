let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
console.log("Secure");
} else {
console.log("Unsafe");
}

// Test 2: Alarm is off
isAlarmOn = false;

if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
console.log("Secure");
} else {
console.log("Unsafe");
}

// Test 3: Window is open
isAlarmOn = true;
isWindowClosed = false;

if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
console.log("Secure");
} else {
console.log("Unsafe");
}
