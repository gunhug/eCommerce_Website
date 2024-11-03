$(document).ready(function()  {
    const groupProducts = $("#group-products");
    const postApi = "product.json";

    getProduct();
     function getProduct(){
        fetch(postApi)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
            showProduct(data.product);
        });
     }

     function showProduct(data) {
        groupProducts.innerHTML = ``;
        data.forEach(card => {
            const { image_product, name_product, describe, selling_price, discount, ic_share, ic_like, ic_compare } = card;
            const cardEl = document.createElement('div');
            cardEl.classList.add('card');
            cardEl.innerHTML = `
            <div class="card">
                <a href="single.html"><img src="${image_product}" ></a>
                <div class="content">
                    <div class="title">${name_product}</div>
                    <div class="text">${describe}</div>
                    <div class="price">
                        <div class="selling-price">${selling_price}</div>
                        <div class="discount text-decoration-line-through">${discount}</div>
                    </div>
                </div>
                <div class="pop-up text-center">
                    <a href="Cart.html"><div  class="add-card">Add to cart</div></a>
                    <div class="icons-menu ">
                        <img src="${ic_share}" >
                        <img src="${ic_like}">
                        <img src="${ic_compare}">
                    </div>
                </div>
                
            </div>
            `
            $(groupProducts).append(cardEl)
        })
     }

    const cartHidden = document.querySelector(".section-cart .heading img");
    const cartShow = document.querySelector("header .navbar .icons-menu .outline");
    cartShow.addEventListener("click", function(){
        document.querySelector(".section-cart").style.right = "0"
    })

    cartHidden.addEventListener("click", function(){
        document.querySelector(".section-cart").style.right = "-100%"
    })

 
});