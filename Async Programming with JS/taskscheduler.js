console.log("Start"); // Synchronous - runs immediately

// Macrotask (Task Queue)
setTimeout(() => {
  console.log("setTimeout callback (Macrotask)");
}, 0);

// Microtask (Microtask Queue)
Promise.resolve().then(() => {
  console.log("Promise.then callback (Microtask)");
});

console.log("Synchronous log"); // Still synchronous
console.log("End"); // Final synchronous statement

/*
Explanation:

✔ JavaScript uses an Event Loop with two important queues:
   1. Microtask Queue → Promise.then(), MutationObserver, queueMicrotask()
   2. Macrotask Queue → setTimeout, setInterval, I/O, DOM events

✔ Order of Execution:
   1. Run ALL synchronous code first.
   2. After the call stack is empty, the Event Loop processes the Microtask Queue.
      → ALL microtasks must be completed before moving on.
   3. Only after microtasks are done, the Event Loop takes the next Macrotask.

So output order will be:

Start  
Synchronous log  
End  
Promise.then callback (Microtask)  
setTimeout callback (Macrotask)

✔ Microtasks run before macrotasks because the event loop specification 
  gives priority to microtasks to ensure faster, more predictable promise resolution.
*/
