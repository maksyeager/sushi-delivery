// Код Счетчика для одного элемента

// Находим элементы
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

// Клик по кнопке минуса
btnMinus.addEventListener("click", function(){
    //Проверяем чтобы счетчик был больше 1
    if(+counter.innerText > 1){
        counter.innerText = --counter.innerText;
    }
});

// Клик по кнопке плюс
btnPlus.addEventListener("click", function(){
    counter.innerText = ++counter.innerText;
});