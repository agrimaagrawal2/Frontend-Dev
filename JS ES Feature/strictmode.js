
// STRICT MODE SHOWDOWN

console.log(" Without Strict Mode ");

//  NON-STRICT MODE version
function demoNonStrict(a, a) {
    total = 10; // implicit global (allowed in non-strict)
    console.log("Non-strict total:", total);

    // You CANNOT delete variables — so don't try.
    // Only object properties can be deleted.
    let obj = { value: 100 };
    console.log("Deleted obj.value?", delete obj.value); // true
}
demoNonStrict(5, 10);

// STRICT MODE version

console.log("\n With Strict Mode ");
"use strict";

function demoStrict(a, b) { 
    // FIXED: No duplicate arguments
    let total = 10;  
    console.log("Strict total:", total);

    // delete total would throw an error (so we don't use it)
    let obj = { value: 200 };
    console.log("Deleted obj.value?", delete obj.value); // true
}

try {
    demoStrict(5, 10);
} catch (err) {
    console.error("Strict Mode Error:", err.message);
}

// CORRECT ES6 VERSION

console.log("\n Correct ES6 Version ");

function demoFixed(x, y) {
    let total = 10;
    console.log("Total:", total);

    let obj = { value: 500 };
    console.log("Deleted obj.value?", delete obj.value); // true
}

demoFixed(5, 10);
