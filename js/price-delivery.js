function caltCartPrice(){
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartItem = cartWrapper.querySelectorAll('.cart-item');
    const totalPriceElement = document.querySelector('.total-price');
    let totalPrice = 0;

    cartItem.forEach(function(item){
        const amountElement = item.querySelector('[data-counter]');
        const priceElement = item.querySelector('.price__currency');
        const currentPrice = parseInt(amountElement.innerText) * parseInt(priceElement.innerText);
        totalPrice += currentPrice;
    });

    // Вывод общей стоимости товаров
    totalPriceElement.innerText = totalPrice;
};

function delivery(){
    const totalPriceElement = document.querySelector('.total-price');
    const deliveryElement = document.querySelector('.delivery');
    const deliveryCostElemnt = document.querySelector('.delivery-cost');
    const deliverySmall = document.querySelector("delivery-small");

    // Скрываем или показываем блок доставки
    if(parseInt(totalPriceElement.innerText) === 0){
        deliveryElement.classList.add('none');
    }else{
        deliveryElement.classList.remove('none');
    }
   
    // Указываем стоимость доставки
    if(parseInt(totalPriceElement.innerText) > 0 && parseInt(totalPriceElement.innerText) >= 1000){
        deliveryCostElemnt.classList.add('free');
        deliveryCostElemnt.innerText = "бесплатно";
    }else if(parseInt(totalPriceElement.innerText) > 0 && parseInt(totalPriceElement.innerText) < 1000){
        deliveryCostElemnt.classList.remove('free');
        deliveryCostElemnt.innerText = "300 ₽";
    }
}
