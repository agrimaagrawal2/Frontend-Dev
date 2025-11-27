document.addEventListener("DOMContentLoaded", function () {

    let questions = document.querySelectorAll(".question");
    let answers = document.querySelectorAll(".answer");
    let inputs = document.querySelectorAll("input");

    // 1. Click question → toggle answer
    questions.forEach((question, index) => {
        question.addEventListener("click", function () {
            let answer = answers[index];
            answer.style.display = (answer.style.display === "block") ? "none" : "block";
        });

        // 3. Double click → collapse all answers
        question.addEventListener("dblclick", function () {
            answers.forEach(ans => ans.style.display = "none");
        });
    });

    // 4. Focus input → highlight parent faq
    inputs.forEach(input => {
        input.addEventListener("focus", function () {
            let faq = input.closest(".faq");
            faq.classList.add("highlight");
        });

        // 5. Blur → reset background
        input.addEventListener("blur", function () {
            let faq = input.closest(".faq");
            faq.classList.remove("highlight");
        });
    });

});
