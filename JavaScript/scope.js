// global scope-define one function and access global variable inside and outside of function
// var global1=20;

// function myFunction(){
//     console.log(global1);
// }
// myFunction();
// console.log(global1);

//function scope-define one function and access that variable inside and outside of function
// function myFunction1(){
//     let variable="i am function variable";
//     console.log(variable);
// }
// myFunction1();
// console.log(variable);

// block scope-define one function and access that variable inside and outside of function
// if (true) {
//     let blockVar = "I am a block-scoped variable";
//     console.log(blockVar); // Accessing block-scoped variable inside block
// }
// console.log(blockVar); // Error: blockVar is not defined


// lexical scope-define inner function inside outer function and access outer function variable inside inner function call inner function inside outer function scope

// function outerFunction() {
//     let outerVar = "I am from outer function";
//     function innerFunction() {

//         console.log(outerVar); // Accessing outer function's variable inside inner function
//     }
//     innerFunction();
// }
// outerFunction();