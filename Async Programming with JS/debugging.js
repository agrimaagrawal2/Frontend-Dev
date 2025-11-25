// Predicted Output:
// 1. Script start          (synchronous)
// 2. Script end            (synchronous)
// 3. Promise callback      (microtask)
// 4. Timeout callback      (macrotask)

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

// Explanation:
// 1. All synchronous code runs first ("Script start", "Script end").
// 2. The Promise callback goes into the Microtask Queue.
// 3. setTimeout goes into the Macrotask (Task) Queue.
// 4. After the call stack is empty, JavaScript runs ALL microtasks before any macrotasks.
//    That’s why "Promise callback" appears before "Timeout callback".
