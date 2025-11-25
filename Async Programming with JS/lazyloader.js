// Original async loaders with added random rejection
function loadProfile() {
  return new Promise((resolve, reject) => {
    const fail = Math.random() < 0.3; // 30% chance to fail
    setTimeout(() => {
      fail ? reject("Profile Failed") : resolve("Profile Loaded");
    }, 2000);
  });
}

function loadPosts() {
  return new Promise((resolve, reject) => {
    const fail = Math.random() < 0.3;
    setTimeout(() => {
      fail ? reject("Posts Failed") : resolve("Posts Loaded");
    }, 1500);
  });
}

function loadMessages() {
  return new Promise((resolve, reject) => {
    const fail = Math.random() < 0.3;
    setTimeout(() => {
      fail ? reject("Messages Failed") : resolve("Messages Loaded");
    }, 1000);
  });
}

// MAIN EXECUTION
const start = Date.now();

Promise.allSettled([loadProfile(), loadPosts(), loadMessages()])
  .then(results => {
    console.log("=== Module Load Status ===");

    results.forEach((result, index) => {
      const moduleName = ["Profile", "Posts", "Messages"][index];

      if (result.status === "fulfilled") {
        console.log(`${moduleName}: SUCCESS → ${result.value}`);
      } else {
        console.log(`${moduleName}: FAILED → ${result.reason}`);
      }
    });

    const totalTime = (Date.now() - start) / 1000;
    console.log(`Total time taken: ${totalTime}s`);
  });
