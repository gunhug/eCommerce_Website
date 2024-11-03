$(document).ready(function () {
const $dots = $("#section-inspirations .dots .dot");
const $inspirations = $(".ig-inspirations img");

let currentIndex = 0;
const totalItems = $inspirations.length;

function showNextItem() {
    $inspirations.eq(currentIndex).removeClass("active");
    $dots.eq(currentIndex).removeClass("active");

    currentIndex = (currentIndex + 1) % totalItems;

    $inspirations.eq(currentIndex).addClass("active");
    $dots.eq(currentIndex).addClass("active");
}

let intervalId = setInterval(showNextItem, 3000);

$inspirations.on("click", function () {
    $inspirations.eq(currentIndex).removeClass("active");
    $dots.eq(currentIndex).removeClass("active");

    currentIndex = $(this).index(); 

    $inspirations.eq(currentIndex).addClass("active");
    $dots.eq(currentIndex).addClass("active");

    // Reset interval when user clicks
    clearInterval (intervalId);
    intervalId = setInterval(showNextItem, 3000);
  });

// Toggle dots on click
$dots.on("click", function () {
    $inspirations.eq(currentIndex).removeClass("active");
    $dots.eq(currentIndex).removeClass("active");

    currentIndex = $(this).index(); 

    $inspirations.eq(currentIndex).addClass("active");
    $dots.eq(currentIndex).addClass("active");

    // Reset interval when user clicks
    clearInterval (intervalId);
    intervalId = setInterval(showNextItem, 3000);
  });

  const cartHidden = document.querySelector(".section-cart .heading img");
    const cartShow = document.querySelector("header .navbar .icons-menu .outline");
    cartShow.addEventListener("click", function(){
        document.querySelector(".section-cart").style.right = "0"
    })

    cartHidden.addEventListener("click", function(){
        document.querySelector(".section-cart").style.right = "-100%"
    })

});