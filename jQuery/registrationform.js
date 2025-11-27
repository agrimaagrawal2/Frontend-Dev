$(document).ready(function () {

    let existingEmails = ["test@mail.com", "admin@mail.com"];

    $("#registerBtn").click(function () {

        // Clear previous styles and messages
        $("input").css("border", "1px solid #ccc");
        $(".error").text("");
        $("#successMsg").text("");

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let password = $("#password").val().trim();

        let valid = true;

        // 1. Name validation
        if (name === "") {
            $("#nameError").text("Name is required");
            $("#name").css("border", "2px solid red");
            valid = false;
        }

        // 2. Email validation
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (!email.match(emailPattern)) {
            $("#emailError").text("Invalid email format");
            $("#email").css("border", "2px solid red");
            valid = false;
        }
        else if (existingEmails.includes(email)) {
            $("#emailError").text("Email already registered");
            $("#email").css("border", "2px solid red");
            valid = false;
        }

        // 3. Password validation
        if (password.length < 8) {
            $("#passwordError").text("Password must be at least 8 characters");
            $("#password").css("border", "2px solid red");
            valid = false;
        }

        // 4. Success message
        if (valid) {
            $("#successMsg").text(" Registration Successful!");
            existingEmails.push(email);  // simulate database
        }

    });
});
