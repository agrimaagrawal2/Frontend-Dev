// 1. Set Greeting based on Time
function setGreeting() {
    let hour = new Date().getHours();
    let greetingText = "";

    if (hour < 12) {
        greetingText = "Good Morning ";
    } 
    else if (hour < 18) {
        greetingText = "Good Afternoon ";
    } 
    else {
        greetingText = "Good Evening ";
    }

    document.getElementById("greeting").innerText = greetingText;
}

// 2. Change Greeting to Quote
function changeGreeting() {
    const quotes = [
        "Believe in yourself ",
        "Success is no accident ",
        "Dream big and dare to fail ",
        "Work hard in silence, let success make noise "
    ];

    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("greeting").innerText = randomQuote;
}

// 3. Toggle Welcome Message
function toggleMessage() {
    let msg = document.getElementById("welcomeMessage");

    msg.style.display = (msg.style.display === "none") ? "block" : "none";
}

// 4. Alert on Greeting Click
document.getElementById("greeting").onclick = function () {
    alert("You clicked the greeting text!");
};

// Load greeting on page load
setGreeting();
