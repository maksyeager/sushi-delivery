const cartWrapper = document.querySelector('.cart-wrapper');

// Отслеживаем клик по всей странице
window.addEventListener("click", function(event){
    // Проверяем что клик был совершен по кнопке "Добавить в корзину"
    if(event.target.hasAttribute("data-cart")){
        // Находим карточку с товаром, внутри которой был совершен клик
        const card = event.target.closest(".card");
        
        // Собираем данные с этого товара и записываем их в объект productInfo
        const productInfo = {
            id: card.dataset.id,
            imgSrc : card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weigth: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText
        }
        
        // Проверить, если такой товар в корзине
        // const itemInCart = cartWrapper.querySelector('[data-id="' + productInfo + '"]'); // - Первый способ
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`); // - Второй способ

        if(itemInCart){
            // Если товар есть в корзине
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = +counterElement.innerText + +productInfo.counter
        }else{
            // Если товара нет в корзине

            // Собранные данные подставим в шаблон для товара в корзине
            const cartItemHtml = `<div class="cart-item" data-id="${productInfo.id}">
                                    <div class="cart-item__top">
                                        <div class="cart-item__img">
                                            <img src="${productInfo.imgSrc}" alt="">
                                        </div>
                                        <div class="cart-item__desc">
                                            <div class="cart-item__title">${productInfo.title}</div>
                                            <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weigth}</div>

                                            <!-- cart-item__details -->
                                            <div class="cart-item__details">

                                                <div class="items items--small counter-wrapper">
                                                    <div class="items__control" data-action="minus">-</div>
                                                    <div class="items__current" data-counter="">${productInfo.counter}</div>
                                                    <div class="items__control" data-action="plus">+</div>
                                                </div>

                                                <div class="price">
                                                    <div class="price__currency">${productInfo.price}</div>
                                                </div>

                                            </div>
                                            <!-- // cart-item__details -->

                                        </div>
                                    </div>
							    </div>`;

            // Отобразим товар в корзине
            cartWrapper.insertAdjacentHTML("beforeend", cartItemHtml);
        }

        card.querySelector('[data-counter]').innerText = '1';

        // Отображение статуса корзины (Пустая / Полная)
        toogleCartStatus();

        // Пересчет общей стоимости товаров в корзине
        caltCartPrice();

        // Определение стоимости доставки
        delivery();
    }
});