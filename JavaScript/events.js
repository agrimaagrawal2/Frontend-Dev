function myfunction() {
    console.log("clicked");
}

function dbFun(){
    console.log("double clicked");
    
}


 const btnEle = document.getElementById("btn");

//  btnEle.addEventListener("click",()=>{
//     console.log("button clicked");
//     });
    


//  btnEle.addEventListener("mouseenter",()=>{
//     console.log("button clicked");
//     });

// let count=0;
// btnEle.addEventListener("mouseenter",()=>{
//     count++;
//     console.log(btn clicked ${count});
    
//     });


let count=0;
btnEle.addEventListener("dblclick",()=>{
    count++;
    console.log(`btn clicked ${count}`);
    
    });