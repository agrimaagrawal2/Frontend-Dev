$(document).ready(function () {

    updateCount();

    // 1. Search filter using keyup
    $("#searchBox").keyup(function () {
        let value = $(this).val().toLowerCase();
        let matchCount = 0;

        $(".course").each(function () {
            let text = $(this).text().toLowerCase();

            // Remove previous highlights
            $(this).html($(this).text());

            if (text.includes(value)) {
                $(this).show();
                matchCount++;

                // 2. Highlight matching text using CSS class
                if (value !== "") {
                    let regex = new RegExp("(" + value + ")", "gi");
                    let newText = $(this).text().replace(regex, `<span class="highlight">$1</span>`);
                    $(this).html(newText);
                }
            } 
            else {
                // 3. Hide non-matching courses
                $(this).hide();
            }
        });

        // 4. Show count dynamically
        $("#count").text("Matched Courses: " + matchCount);
    });

    // 5. Clear search
    $("#clearBtn").click(function () {
        $("#searchBox").val("");
        $(".course").show();
        $(".course").each(function () {
            $(this).html($(this).text());
        });

        updateCount();
    });

    function updateCount() {
        $("#count").text("Total Courses: " + $(".course").length);
    }

});
