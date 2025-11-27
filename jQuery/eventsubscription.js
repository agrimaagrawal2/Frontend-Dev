$(document).ready(function () {

    // Subscribe / Unsubscribe using .on()
    $("#panel").on("click", ".topic", function (event) {

        // Prevent remove click from subscribing
        if ($(event.target).hasClass("remove")) return;

        $(this).toggleClass("subscribed");

        let status = $(this).hasClass("subscribed")
            ? " Subscribed successfully!"
            : " Unsubscribed successfully!";

        showMessage(status);
    });

    // Add new topic dynamically
    $("#addBtn").click(function () {
        let topic = $("#newTopic").val().trim();

        if (topic === "") return;

        let newDiv = $(`
            <div class="topic">${topic} <span class="remove">✖</span></div>
        `);

        $("#panel").prepend(newDiv);
        $("#newTopic").val("");

        showMessage(" New topic added!");
    });

    // Remove topic & detach events using .off()
    $("#panel").on("click", ".remove", function () {

        let parent = $(this).parent();

        // Detach click events
        parent.off("click");

        parent.fadeOut(300, function () {
            $(this).remove();
        });

        showMessage(" Topic removed");
    });

    // Show success message dynamically in DOM
    function showMessage(text) {
        $("#messageBox").html(`<div class="message">${text}</div>`);

        setTimeout(function () {
            $(".message").fadeOut();
        }, 2000);
    }

});
