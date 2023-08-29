// Прослушка на всё окно

window.addEventListener("click", function(event){ 

    // Обьевялем счетчик заранее
    let counter;

    // Проверяем клик строго по кнопке + или -
    if(event.target.dataset.action === "plus" || event.target.dataset.action === "minus"){
        // Находим обертку счетчика
        const counterWrapper = event.target.closest('.counter-wrapper');
        // Находим счетчик 
        counter = counterWrapper.querySelector('[data-counter]');
    }

    // Проверяем является ли элемент по которому был совершен клик кнопкой +
    if(event.target.dataset.action === "plus"){
        counter.innerText = ++counter.innerText;
    }

    // Проверяем является ли элемент по которому был совершен клик кнопкой -
    if(event.target.dataset.action === "minus"){
        // Проверяем чтобы счетчик был больше 1
        if(+counter.innerText > 1){
            counter.innerText = --counter.innerText;
        }else if(event.target.closest('.cart-wrapper') && +counter.innerText === 1){
            // Проверка на товар который находится в корзинt
            
            // Удаляем товар из корзины
            event.target.closest('.cart-item').remove()

            // Отображение статуса корзины (Пустая / Полная)
            toogleCartStatus();

            //Пересчет общей стоимости
            caltCartPrice();

            // Определение стоимости доставки
            delivery();
        }
    }

    // Проверяем клик на кнопку + или - внутри корзины (Для пересчета стоимости товаров)
    if(event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
        caltCartPrice();

        // Определение стоимости доставки
        delivery();
    }
});