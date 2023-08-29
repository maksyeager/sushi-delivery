function toogleCartStatus(){
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('#order-form');

    if(cartWrapper.children.length > 0){
        cartEmptyBadge.classList.add("none");
        orderForm.classList.remove("none");
        // cartEmptyBadge.style.display = "none";
    }else{
        cartEmptyBadge.classList.remove("none");
        orderForm.classList.add("none");
        // cartEmptyBadge.style.display = "block";
    }
};