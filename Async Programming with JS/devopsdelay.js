// --- Simulated Deployment Servers ---
function deployServer(name, time) {
  return new Promise((resolve, reject) => {
    const failed = Math.random() < 0.3; // 30% chance of failure

    setTimeout(() => {
      if (failed) {
        reject(` ${name} deployment failed!`);
      } else {
        resolve(` ${name} finished deployment in ${time / 1000}s`);
      }
    }, time);
  });
}

const serverA = deployServer("Server A", 2000); // 2 seconds
const serverB = deployServer("Server B", 3000); // 3 seconds

// --- Promise.all(): Wait for ALL servers ---
Promise.all([serverA, serverB])
  .then(results => {
    console.log(" Deployment completed for all servers");
    console.log(results); // logs both server responses
  })
  .catch(error => {
    console.error("ERROR in Promise.all:", error);
  });

// --- Promise.race(): Fastest server ---
Promise.race([serverA, serverB])
  .then(result => {
    console.log("⚡ Fastest response:");
    console.log(result);
  })
  .catch(error => {
    console.error("ERROR in Promise.race:", error);
  });
