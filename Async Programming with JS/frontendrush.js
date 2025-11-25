
// 1. CALLBACK HELL VERSION

//  5 Asynchronous Pipeline Stages 
function design(cb) {
  setTimeout(() => {
    console.log(" Designing UI...");
    cb();
  }, 1000);
}

function build(cb) {
  setTimeout(() => {
    console.log(" Building components...");
    cb();
  }, 1000);
}

function test(cb) {
  setTimeout(() => {
    console.log(" Running tests...");
    cb();
  }, 1000);
}

function deploy(cb) {
  setTimeout(() => {
    console.log(" Deploying application...");
    cb();
  }, 1000);
}

function celebrate(cb) {
  setTimeout(() => {
    console.log(" Celebrate successful release!");
    cb();
  }, 1000);
}

//  CALLBACK HELL DEMO 
design(() => {
  build(() => {
    test(() => {
      deploy(() => {
        celebrate(() => {
          console.log("✔ Pipeline finished (Callback Hell)");
        });
      });
    });
  });
});



// 2. CLEAN VERSION (ASYNC / AWAIT)

// Shared helper for async version
function waitLog(message) {
  return new Promise(resolve =>
    setTimeout(() => {
      console.log(message);
      resolve();
    }, 1000)
  );
}

// Async/Await Pipeline
async function runPipeline() {
  await waitLog(" Designing UI...");
  await waitLog(" Building components...");
  await waitLog(" Running tests...");
  await waitLog(" Deploying application...");
  await waitLog(" Celebrate successful release!");

  console.log("✔ Pipeline finished (Async/Await)");
}

runPipeline();


// Why async/await improves readability (in comments)
/*
1. Removes the deeply nested "pyramid" structure of callbacks.
2. Code flows top-to-bottom like normal synchronous steps.
3. Easier to read, update, maintain, and debug.
4. Error handling is much simpler using try/catch.
5. Avoids callback hell and makes async logic clean.
*/
