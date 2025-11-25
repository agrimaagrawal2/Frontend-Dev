// Utility to simulate random delay (1–2 seconds)
function randomDelay() {
  return Math.floor(Math.random() * 1000) + 1000;
}

// Step 1: takeOrder
function takeOrder() {
  return new Promise((resolve, reject) => {
    const failed = Math.random() < 0.2; 
    setTimeout(() => {
      failed ? reject("Take order failed") : resolve("Order taken");
    }, randomDelay());
  });
}

// Step 2: prepare
function prepare() {
  return new Promise((resolve, reject) => {
    const failed = Math.random() < 0.2;
    setTimeout(() => {
      failed ? reject("Preparation failed") : resolve("Food prepared");
    }, randomDelay());
  });
}

// Step 3: pack
function pack() {
  return new Promise((resolve, reject) => {
    const failed = Math.random() < 0.2;
    setTimeout(() => {
      failed ? reject("Packing failed") : resolve("Package ready");
    }, randomDelay());
  });
}

// Step 4: dispatch
function dispatch() {
  return new Promise((resolve, reject) => {
    const failed = Math.random() < 0.2;
    setTimeout(() => {
      failed ? reject("Dispatch failed") : resolve("Out for delivery");
    }, randomDelay());
  });
}

// Step 5: deliver
function deliver() {
  return new Promise((resolve, reject) => {
    const failed = Math.random() < 0.2;
    setTimeout(() => {
      failed ? reject("Delivery failed") : resolve("Delivered");
    }, randomDelay());
  });
}

// The main pipeline using async/await
async function runPipeline() {
  console.log("Start Pipeline");

  try {
    const step1 = await takeOrder();
    console.log("Step 1:", step1);

    const step2 = await prepare();
    console.log("Step 2:", step2);

    const step3 = await pack();
    console.log("Step 3:", step3);

    const step4 = await dispatch();
    console.log("Step 4:", step4);

    const step5 = await deliver();
    console.log("Delivery completed!");

  } catch (err) {
    console.log("Pipeline failed!");
    console.error(err);
  }
}

runPipeline();

/*
Explanation (Async / Event Loop):

1. runPipeline() starts immediately (synchronous).
2. Each step uses `await`, which pauses the function until that Promise settles.
3. While awaiting, JS returns control to the event loop.
4. The async step timers finish and move their resolution/rejection into the microtask queue.
5. When the main call stack is empty, microtasks run and the async function resumes from the `await`.
6. If any Promise rejects, code jumps directly to `catch`, skipping the remaining steps.
7. This creates a clean, top-to-bottom flow without callback nesting.
*/
