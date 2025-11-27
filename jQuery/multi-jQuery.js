// Avoid conflicts — separate instances
var jq1 = jQuery.noConflict(true);   // Old version
var jq2 = jQuery.noConflict(true);   // New version

// ------- JQUERY VERSION 1 FEATURES (CAROUSEL + HIGHLIGHT) -------
jq1(function () {

    let slides = jq1(".slide");
    let index = 0;

    slides.eq(index).show();
    jq1(".carousel").addClass("active");

    // 1. Carousel rotation
    setInterval(function () {
        slides.eq(index).fadeOut(500);

        index = (index + 1) % slides.length;

        slides.eq(index).fadeIn(500);
    }, 3000);


    // 3. Highlight active widget
    jq1(".widget").click(function () {
        jq1(".widget").removeClass("active");
        jq1(this).addClass("active");
    });

});


// ------- JQUERY VERSION 2 FEATURES (MODAL + TOOLTIP) -------
jq2(function () {

    // 2. Modal popup
    jq2("#notifyBtn").click(function () {
        jq2(".notification").fadeToggle();
    });


    // 4. Tooltip on hover
    jq2(".tip").hover(
        function (e) {
            let text = jq2(this).data("tip");

            jq2(".tooltip")
                .text(text)
                .css({
                    top: e.pageY + 10,
                    left: e.pageX + 10
                })
                .fadeIn();
        },
        function () {
            jq2(".tooltip").fadeOut();
        }
    )
    .mousemove(function (e) {
        jq2(".tooltip")
            .css({
                top: e.pageY + 10,
                left: e.pageX + 10
            });
    });

});
