// --- Promise-based Bug Tracker ---
function getBugs() {
  return new Promise((resolve, reject) => {
    const apiFailed = Math.random() < 0.4; // 40% chance of failure (simulate)

    setTimeout(() => {
      if (apiFailed) {
        reject(" API Error: Failed to fetch bugs");
      } else {
        resolve(["UI glitch", "API timeout", "Login failure"]);
      }
    }, 1000);
  });
}

// --- Using the Promise-based function ---
console.log("Fetching bugs...");

getBugs()
  .then(bugs => {
    console.log(" Bug List:");
    console.table(bugs); // Neatly formatted table
  })
  .catch(error => {
    console.error(error);
  });
