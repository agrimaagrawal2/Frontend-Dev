$(document).ready(function () {

    // 1. Add new post
    $("#addPost").click(function () {
        let title = $("#postTitle").val().trim();

        if (title === "") return;

        let newPost = $('<div class="post"></div>').text(title);
        $("#posts").append(newPost);

        addTag(newPost);
        highlightKeywords();

        $("#postTitle").val("");
    });


    // 2. Prepend featured post
    $("#prependPost").click(function () {

        let title = $("#postTitle").val().trim();
        if (title === "") return;

        let newPost = $('<div class="post featured"></div>').text("★ " + title);
        $("#posts").prepend(newPost);

        addTag(newPost);
        highlightKeywords();

        $("#postTitle").val("");
    });


    // 3. Remove last post
    $("#removePost").click(function () {
        $("#posts .post:last").remove();
    });


    // 4. Add tags with .before() / .after()
    function addTag(postDiv) {
        let tag = $("#postTag").val().trim();

        if (tag !== "") {
            let tagBadge = `<span class="tag">${tag}</span>`;

            // Add tag before title
            postDiv.prepend(tagBadge);

            $("#postTag").val("");
        }
    }


    // 5. Highlight keyword posts dynamically
    function highlightKeywords() {
        const keywords = ["javascript", "css", "important"];

        $(".post").each(function () {
            let text = $(this).text().toLowerCase();

            if (keywords.some(word => text.includes(word))) {
                $(this).addClass("highlight");
            } else {
                $(this).removeClass("highlight");
            }
        });
    }

});
