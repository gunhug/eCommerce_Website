$(document).ready(function()  {

    const cartHidden = document.querySelector(".section-cart .heading img");
    const cartShow = document.querySelector("header .navbar .icons-menu .outline");
    cartShow.addEventListener("click", function(){
        document.querySelector(".section-cart").style.right = "0"
    })

    cartHidden.addEventListener("click", function(){
        document.querySelector(".section-cart").style.right = "-100%"
    })

 
});