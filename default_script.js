window.onbeforeunload = function () {window.scrollTo(0, 0)}; // при обновлении страницы, перематывать её в самый верх, в искходное состояние
const elements = document.querySelector(".elements");
const element = document.querySelectorAll(".element");
const about_buttons = document.querySelectorAll(".about_btn");
let about_section = document.querySelector(".about");
let info_text = document.querySelector(".info__text");
let burgerNav = document.querySelector(".burger-navigation");
let burgerButton = document.querySelector(".burger-menu");
let header__img = document.querySelector(".header__img");
let close_about_btn = document.querySelector(".close-btn");
let loading = document.querySelector(".loading");
let right_arrow = document.querySelector(".right-arrow");
let left_arrow = document.querySelector(".left-arrow");
let carouselContainer = document.querySelector(".carousel");
let slides = document.querySelectorAll(".carousel__slide");
let carouselTape = document.querySelector(".carousel__tape");
const Xiaomi_Redmi_Note_11s = [`Процессор: MediaTek Helio G96, частота: 2.05ГГц.\nДисплей: AMOLED, диагональ: 6.43', разрешение дисплея: 2400x1080, плотность пикселей - 409 PPI.\nКамера: основная камера - 108Мп, сверхширокоугольная - 8Мп с углом обзора в 118°, макросъемка имеется, а также видеосъемка 1080p 1920x1080 30к/с, cелфи камера - 16Мп.\nАккумулятор и зарядка: 5000 мАч, быстрая зарядка 33Вт, разъём - USB-C.\nРазмеры: 159,87x73,87x8,09 мм, вес - 179 г.\nЦена: 17000 руб.`];
const Apple_Iphone_14_Pro = [`Процессор: Apple A16 Bionic, частота: 3.46ГГц.\nДисплей: OLED, диагональ: 6.1', разрешение дисплея: 1179x2556, плотность пикселей - 460 PPI.\nКамера: основная камера - 48Мп, сверхширокоугольная - 12Мп с углом обзора в 120°, видеосъемка 2160p (4k) 60к/с, cелфи камера - 12Мп.\nАккумулятор и зарядка: 3200 мАч, быстрая зарядка - имеется(60% за 30 минут), разъём - Apple Lightning.\nРазмеры: 147,5x71,5x7,85 мм, вес - 206 г.\nЦена: 94000 руб.`];
const Samsung_Galaxy_Z_Fold_4 = [`Процессор: Qualcomm SM8475 Snapdragon 8+ Gen 1, частота: 3.18ГГц.\nДисплей: Dynamic AMOLED 2X, диагональ: 7.6', разрешение дисплея: 2176x1812, плотность пикселей - 374 PPI.\nКамера: основная камера - 50Мп, видеосъемка UHD 8K (7680 x 4320) для 24 кадров в секунду, cелфи камера - 10Мп.\nАккумулятор и зарядка: 4400 мАч, разъём - USB-C.\nРазмеры: 155,1x130,1x6,3 мм - в разложенном виде и 155.1 x 67.1 x 15.8 - в сложенном виде, вес - 263 г.\nЦена: 150000 руб.`];
const Samsung_Galaxy_S_22 = [`Процессор: восьмиядерная однокристальная система Exynos 2200, частота: 2.8ГГц.\nДисплей: Dynamic AMOLED 2X, диагональ: 6.1', разрешение дисплея: 2340 x 1080 (FHD+), плотность пикселей - 393 PPI.\nКамера: основная камера - 50Мп, видеосъемка UHD 8K (7680 x 4320) для 24 кадров в секунду, cелфи камера - 10Мп.\nАккумулятор и зарядка: 3700 мАч, разъём - USB-C.\nРазмеры: 146.0x70.6x7.6 мм, вес - 167 г.\nЦена: 75000 руб.`];
const Xiaomi_12T_Pro = [`Процессор: Snapdragon® 8+ Gen 1, частота: 3.2ГГц.\nДисплей: AMOLED DotDisplay, диагональ: 6.67', разрешение дисплея: 2712x1220, плотность пикселей - 446 PPI.\nКамера: cистема из трех камер: 200 Мп + 8 Мп + 2 Мп, широкоугольная камера с разрешением 200 Мп, ультраширокоугольная - 8Мп с углом обзора в 120°, макросъемка(2Мп), режимы видеосъемки: 8K 7680x4320 при 24 кадрах/с, 4K, 3840x2160 при 60 кадрах/с.\nАккумулятор и зарядка: 5000 мАч, поддержка проводной ультрабыстрой зарядки мощностью 120 Вт: 19 мин до 100%, разъём - USB Type-C\nРазмеры: 163.1x75.9x8.6 мм, вес - 205 г.\nЦена: 55000 руб.`];
const Asus_Rog_Phone_6_Pro = [`Процессор: Qualcomm Snapdragon 8 Plus Gen 1, частота: 3.19ГГц.\nДисплей: AMOLED, диагональ: 6.78', разрешение дисплея: 1080x2448, плотность пикселей - 395 PPI.\nКамера: основная камера - 50Мп, разрешение фото - 8192x6144, видеосъемка 8K/24fps, 4K/60fps, 1080p/60fps, cелфи камера - 12Мп.\nАккумулятор и зарядка: 6000 мАч, быстрая зарядка: 75% за 30 минут, разъём - USB-C.\nРазмеры: 173x77x10,3 мм, вес - 239 г.\nЦена: 166000 руб.`];
const Motorola_Razr_2022 = [`Процессор: Qualcomm Snapdragon 8+ Gen1, частота: 2.8ГГц.\nДисплей: OLED, диагональ: 6.7', разрешение дисплея: 1080x2400 , плотность пикселей - 393 PPI.\nКамера: основная камера - 50Мп,  видеосъемка 4K, cелфи камера - 32Мп.\nАккумулятор и зарядка: 3500 мАч, разъём - USB-C.\nРазмеры: 167x79.8x7.6 мм, вес - 200 г.\nЦена: 125000 руб.`];
const Huawei_Mate_50_Pro = [`Процессор: Snapdragon 8+ Gen1, частота: 3.2ГГц.\nДисплей: OLED, диагональ: 6.74', разрешение дисплея: 2616x1212, плотность пикселей - 428 PPI.\nКамера: модуль с широкой диафрагмой 50 Мп, ультраширокоугольный модуль 13 Мп, телефотомодуль 64 Мп, а также видеосъемка с разрешением до 3840x2160 px.\nАккумулятор и зарядка: 4700 мАч, смартфон поддерживает супербыструю зарядку, а также беспроводную быструю зарядку Huawei SuperCharge, разъём - USB-C.\nРазмеры: 162.1x75.5x8.5 мм, вес - 209 г.\nЦена: 65000 руб.`];
const Xiaomi_12S_Ultra = [`Процессор: Qualcomm Snapdragon 8 Plus Gen 1, частота: 3.19ГГц.\nДисплей: AMOLED, диагональ: 6.73', разрешение дисплея: 1440x3200, плотность пикселей - 521 PPI.\nКамера: основная камера - 50Мп, сверхширокоугольная - 48Мп с углом обзора в 128°, макросъемка имеется, а также режимы видеосъемки: 8K/24fps, 4K/60fps, 1080p/60fps cелфи камера - 32Мп.\nАккумулятор и зарядка: 4860 мАч, быстрая зарядка - 73% за 30 минут, разъём - USB-C.\nРазмеры: 163,17x74,92x9,06 мм, вес - 225 г.\nЦена: 67000 руб.`];
const ZTE_Nubia_Red_Magic_7 = [`Процессор: Qualcomm Snapdragon 8 Gen 1, частота: 3ГГц.\nДисплей: AMOLED, диагональ: 6.8', разрешение дисплея: 1080x2400, плотность пикселей - 387 PPI.\nКамера: основная камера - 64Мп, сверхширокоугольная - 8Мп с углом обзора в 120°, макросъемка - 2Мп, видеосъемка 8K/30fps, 4K/60fps, 1080p/60fps, cелфи камера - 8Мп.\nАккумулятор и зарядка: 4500 мАч, быстрая зарядка - 99% за 30 минут, разъём - USB-C.\nРазмеры: 170.5x78.3x9.5 мм, вес - 215 г.\nЦена: 60000 руб.`];

close_about_btn.addEventListener("click",()=>{about_section.style.display="none"});//закрывает окно описания товара
burgerButton.addEventListener("click",()=> {burgerNav.style.display="block";document.body.style.overflow="hidden"}) // бургер меню скрыт, но по нажатию откроется
header__img.addEventListener("mouseover",(e)=>{e.target.src="./images/logo_hover.png"});
header__img.addEventListener("mouseout",(e)=>{e.target.src="./images/logo.png"}); // меняет изображение в хедере при наведении и отводе курсора



function carousel() { // функция для слайдера(карусели) адаптивная с изменяющимся transition(плавностью перехода слайдов)
        let minStep = carouselContainer.offsetWidth;
        position = 0;

        setInterval(()=>{if(position >= minStep*4) {position = 0} else {position += minStep} // автоматическая прокрутка слайдов
        carouselTape.style.transform = `translateX(-${position}px)`},2000); 

        right_arrow.addEventListener("click",(e)=>{
                position += minStep
                if(position > minStep*4) {position = 0;carouselTape.style.transition="0s"}
                else {carouselTape.style.transition="0.5s"}
                carouselTape.style.transform = `translateX(-${position}px)`
                
        });
        
        left_arrow.addEventListener("click",(e)=>{
                position-= minStep
                if(position < 0) {position = minStep*4;carouselTape.style.transition="0s"}
                else {carouselTape.style.transition="0.5s"}
                 carouselTape.style.transform = `translateX(-${position}px)`
        });
        
}
carousel();  

function writeCode(text_name) { // функция, которая создает эффект печатной машинки, в зависимости от аргумента меняется наполнение элемента.
        let increment = 0;
        let interval_ID = setInterval(()=>{
                info_text.textContent += text_name[0][increment]
                increment++;
                if(interval_ID) {loading.style.display="block"};
                if (info_text.textContent.length >= text_name[0].length) {
                        clearInterval(interval_ID);
                        loading.style.display="none"
                        about_buttons.forEach((element)=>{element.style.pointerEvents="auto"})
                }
                else {
                        about_buttons.forEach((element)=>{element.style.pointerEvents="none"})
                }
                

        },10)    
        
}



for (let i = 0; i < about_buttons.length; i++) {
        about_buttons[i].addEventListener("click",(e)=>{about_section.style.display="block";info_text.textContent = "";about_buttons[i].style.backgroundColor="pink";})

        if (about_buttons[i].hasAttribute("data-Xiaomi-Redmi-Note-11S")) {
                about_buttons[i].addEventListener("click",()=>{writeCode(Xiaomi_Redmi_Note_11s)})
        }
        if(about_buttons[i].hasAttribute("data-Apple-iPhone-14-pro")) {
                about_buttons[i].addEventListener("click",()=>{writeCode(Apple_Iphone_14_Pro)})
        }
         if (about_buttons[i].hasAttribute("data-Samsung-Galaxy-Z-Fold-4")) {
                 about_buttons[i].addEventListener("click",()=>{writeCode(Samsung_Galaxy_Z_Fold_4)})
         }
         if (about_buttons[i].hasAttribute("data-Samsung-Galaxy-S-22")) {
                 about_buttons[i].addEventListener("click",()=>{writeCode(Samsung_Galaxy_S_22)})
         }
         if (about_buttons[i].hasAttribute("data-Xiaomi-12T-Pro")) {
                 about_buttons[i].addEventListener("click",()=>{writeCode(Xiaomi_12T_Pro)})
         }
         if (about_buttons[i].hasAttribute("data-Asus-Rog-Phone-6-Pro")) {
                 about_buttons[i].addEventListener("click",()=>{writeCode(Asus_Rog_Phone_6_Pro)})
         }
         if (about_buttons[i].hasAttribute("data-Motorola-Razr-2022")) {
                 about_buttons[i].addEventListener("click",()=>{writeCode(Motorola_Razr_2022)})
         }
         if (about_buttons[i].hasAttribute("data-Huawei-Mate-50-Pro")) {
                about_buttons[i].addEventListener("click",()=>{writeCode(Huawei_Mate_50_Pro)})
        }
        if (about_buttons[i].hasAttribute("data-Xiaomi-12S-Ultra")) {
                about_buttons[i].addEventListener("click",()=>{writeCode(Xiaomi_12S_Ultra)})
        }
        if (about_buttons[i].hasAttribute("data-ZTE-Nubia-Red-Magic-7")) {
                about_buttons[i].addEventListener("click",()=>{writeCode(ZTE_Nubia_Red_Magic_7)})
        }
} // цикл, бегущий по определенной кнопке, проверяющий есть ли соответствующий data-атрибут, по клику на кнопку запускается функция отрисовки соответствующего описания товара
