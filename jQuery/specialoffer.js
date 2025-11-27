$(document).ready(function () {

    let banners = $(".banner");
    let index = 0;
    let isVisible = false;

    // Show first banner initially
    banners.eq(index).fadeIn();

    // 1. Hide
    $("#hideBtn").click(function () {
        banners.fadeOut();
    });

    // 2. Show
    $("#showBtn").click(function () {
        banners.fadeIn();
    });

    // 3. Slide toggle
    $("#slideBtn").click(function () {
        banners.slideToggle();
    });

    // 4. Fade toggle
    $("#fadeBtn").click(function () {
        if (isVisible) {
            banners.fadeOut();
        } else {
            banners.fadeIn();
        }
        isVisible = !isVisible;
    });

    // 5. Auto rotate every 5 seconds
    setInterval(function () {
        banners.eq(index).fadeOut(800, function () {
            index = (index + 1) % banners.length;
            banners.eq(index).fadeIn(800);
        });
    }, 5000);
});
