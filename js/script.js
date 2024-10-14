import tabs from './modules/tabs';

window.addEventListener("DOMContentLoaded", () => {
    
    tabs(".tabheader__item", //каждый пункт выбора (фитнес, премиум, постное, сбалансированное)
         ".tabcontent", //каждый див, куда входит картинка + текст
         ".tabheader__items", // див куда входит все пункты выбора
         "tabheader__item_active"); // класс активности
});