$(document).ready(function () {

    // 1. Click Manager → Highlight Direct Employees
    $(".manager").click(function () {
        $(".employee").removeClass("highlight");

        $(this)
            .nextAll(".employee")
            .addClass("highlight");
    });


    // 2. Hover Employee → Show contact using .next()
    $(".employee").hover(
        function () {
            $(this).next(".contact").fadeIn();
        },
        function () {
            $(this).next(".contact").fadeOut();
        }
    );


    // 3. Click Department → Highlight Children
    $(".department").click(function (e) {
        if (!$(e.target).hasClass("department")) return;

        $(".team").removeClass("deptHighlight");

        $(this)
            .children(".team")
            .addClass("deptHighlight");
    });


    // 4. Random Employee → Highlight Siblings
    $("#randomBtn").click(function () {

        $(".employee").removeClass("siblingHighlight");

        let employees = $(".employee");
        let random = Math.floor(Math.random() * employees.length);
        let selected = employees.eq(random);

        selected
            .siblings(".employee")
            .addClass("siblingHighlight");
    });


    // 5. Collapse / Expand using .parent() and .find()
    let collapsed = false;

    $("#toggleBtn").click(function () {

        if (!collapsed) {
            $(".manager").each(function () {
                $(this)
                    .parent()
                    .find(".employee, .contact")
                    .slideUp();
            });
        } else {
            $(".manager").each(function () {
                $(this)
                    .parent()
                    .find(".employee")
                    .slideDown();
            });
        }

        collapsed = !collapsed;
    });

});
