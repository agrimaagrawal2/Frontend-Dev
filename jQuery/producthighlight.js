// Load after page is ready
document.addEventListener("DOMContentLoaded", function () {

    let products = document.querySelectorAll(".product");
    let favorites = document.querySelectorAll(".favorite");

    // 1. Click product to Highlight + Out of stock alert
    products.forEach(product => {
        product.addEventListener("click", function () {

            product.classList.toggle("highlight");

            let stock = product.getAttribute("data-stock");
            if (stock === "no") {
                alert(" This product is out of stock!");
            }
        });
    });

    // 3. Favorite icon toggle
    favorites.forEach(icon => {
        icon.addEventListener("click", function (event) {
            event.stopPropagation(); // prevent product click
            icon.classList.toggle("selected");
        });
    });

});
