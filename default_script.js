const elements = document.querySelector(".elements");
const element = document.querySelectorAll(".element");
const element_Buttons = elements.querySelectorAll(".about_btn");
let about_section = document.querySelector(".about");
let img_stat = document.querySelector(".img-stat");
let info = document.querySelector(".info");
let info_text = info.firstElementChild;
let burgerNav = document.querySelector(".burger-navigation");
let burgerButton = document.querySelector(".burger-menu");
const Xiaomi_Redmi_Note_11s = [`Процессор: MediaTek Helio G96, частота: 2.05ГГц.\nДисплей: AMOLED, диагональ: 6.43', разрешение дисплея: 2400x1080, плотность пикселей - 409 PPI.\nКамера: основная камера - 108Мп, сверхширокоугольная - 8Мп с углом обзора в 118°, макросъемка имеется, а также видеосъемка 1080p 1920x1080 30к/с, cелфи камера - 16Мп.\nАккумулятор и зарядка: 5000 мАч, быстрая зарядка 33Вт, разъём - USB-C.\nРазмеры: 159,87x73,87x8,09 мм, вес - 179 г.\nЦена: 17000 руб.`];
const Apple_Iphone_14_Pro = [`Процессор: Apple A16 Bionic, частота: 3.46ГГц.\nДисплей: OLED, диагональ: 6.1', разрешение дисплея: 1179x2556, плотность пикселей - 460 PPI.\nКамера: основная камера - 48Мп, сверхширокоугольная - 12Мп с углом обзора в 120°, видеосъемка 2160p (4k) 60к/с, cелфи камера - 12Мп.\nАккумулятор и зарядка: 3200 мАч, быстрая зарядка - имеется(60% за 30 минут), разъём - Apple Lightning.\nРазмеры: 147,5x71,5x7,85 мм, вес - 206 г.\nЦена: 94000 руб.`];
const Samsung_Galaxy_Z_Fold_4 = [`Процессор: Qualcomm SM8475 Snapdragon 8+ Gen 1, частота: 3.18ГГц.\nДисплей: Dynamic AMOLED 2X, диагональ: 7.6', разрешение дисплея: 2176x1812, плотность пикселей - 374 PPI.\nКамера: основная камера - 50Мп, видеосъемка UHD 8K (7680 x 4320) для 24 кадров в секунду, cелфи камера - 10Мп.\nАккумулятор и зарядка: 4400 мАч, разъём - USB-C.\nРазмеры: 155,1x130,1x6,3 мм - в разложенном виде и 155.1 x 67.1 x 15.8 - в сложенном виде, вес - 263 г.\nЦена: 150000 руб.`];
const Samsung_Galaxy_S_22 = [`Процессор: восьмиядерная однокристальная система Exynos 2200, частота: 2.8ГГц.\nДисплей: Dynamic AMOLED 2X, диагональ: 6.1', разрешение дисплея: 2340 x 1080 (FHD+), плотность пикселей - 393 PPI.\nКамера: основная камера - 50Мп, видеосъемка UHD 8K (7680 x 4320) для 24 кадров в секунду, cелфи камера - 10Мп.\nАккумулятор и зарядка: 3700 мАч, разъём - USB-C.\nРазмеры: 146.0x70.6x7.6 мм, вес - 167 г.\nЦена: 75000 руб.`];
const Xiaomi_12T_Pro = [`Процессор: Snapdragon® 8+ Gen 1, частота: 3.2ГГц.\nДисплей: AMOLED DotDisplay, диагональ: 6.67', разрешение дисплея: 2712x1220, плотность пикселей - 446 PPI.\nКамера: cистема из трех камер: 200 Мп + 8 Мп + 2 Мп, широкоугольная камера с разрешением 200 Мп, ультраширокоугольная - 8Мп с углом обзора в 120°, макросъемка(2Мп), режимы видеосъемки: 8K 7680x4320 при 24 кадрах/с, 4K, 3840x2160 при 60 кадрах/с.\nАккумулятор и зарядка: 5000 мАч, поддержка проводной ультрабыстрой зарядки мощностью 120 Вт: 19 мин до 100%, разъём - USB Type-C\nРазмеры: 163.1x75.9x8.6 мм, вес - 205 г.\nЦена: 55000 руб.`];
const Asus_Rog_Phone_6_Pro = [`Процессор: Qualcomm Snapdragon 8 Plus Gen 1, частота: 3.19ГГц.\nДисплей: AMOLED, диагональ: 6.78', разрешение дисплея: 1080x2448, плотность пикселей - 395 PPI.\nКамера: основная камера - 50Мп, разрешение фото - 8192x6144, видеосъемка 8K/24fps, 4K/60fps, 1080p/60fps, cелфи камера - 12Мп.\nАккумулятор и зарядка: 6000 мАч, быстрая зарядка: 75% за 30 минут, разъём - USB-C.\nРазмеры: 173x77x10,3 мм, вес - 239 г.\nЦена: 166000 руб.`];
const Motorola_Razr_2022 = [`Процессор: Qualcomm Snapdragon 8+ Gen1, частота: 2.8ГГц.\nДисплей: OLED, диагональ: 6.7', разрешение дисплея: 1080x2400 , плотность пикселей - 393 PPI.\nКамера: основная камера - 50Мп,  видеосъемка 4K, cелфи камера - 32Мп.\nАккумулятор и зарядка: 3500 мАч, разъём - USB-C.\nРазмеры: 167x79.8x7.6 мм, вес - 200 г.\nЦена: 125000 руб.`];
const Huawei_Mate_50_Pro = [`Процессор: Snapdragon 8+ Gen1, частота: 3.2ГГц.\nДисплей: OLED, диагональ: 6.74', разрешение дисплея: 2616x1212, плотность пикселей - 428 PPI.\nКамера: модуль с широкой диафрагмой 50 Мп, ультраширокоугольный модуль 13 Мп, телефотомодуль 64 Мп, а также видеосъемка с разрешением до 3840x2160 px.\nАккумулятор и зарядка: 4700 мАч, смартфон поддерживает супербыструю зарядку, а также беспроводную быструю зарядку Huawei SuperCharge, разъём - USB-C.\nРазмеры: 162.1x75.5x8.5 мм, вес - 209 г.\nЦена: 65000 руб.`];
const Xiaomi_12S_Ultra = [`Процессор: Qualcomm Snapdragon 8 Plus Gen 1, частота: 3.19ГГц.\nДисплей: AMOLED, диагональ: 6.73', разрешение дисплея: 1440x3200, плотность пикселей - 521 PPI.\nКамера: основная камера - 50Мп, сверхширокоугольная - 48Мп с углом обзора в 128°, макросъемка имеется, а также режимы видеосъемки: 8K/24fps, 4K/60fps, 1080p/60fps cелфи камера - 32Мп.\nАккумулятор и зарядка: 4860 мАч, быстрая зарядка - 73% за 30 минут, разъём - USB-C.\nРазмеры: 163,17x74,92x9,06 мм, вес - 225 г.\nЦена: 67000 руб.`];
const ZTE_Nubia_Red_Magic_7 = [`Процессор: Qualcomm Snapdragon 8 Gen 1, частота: 3ГГц.\nДисплей: AMOLED, диагональ: 6.8', разрешение дисплея: 1080x2400, плотность пикселей - 387 PPI.\nКамера: основная камера - 64Мп, сверхширокоугольная - 8Мп с углом обзора в 120°, макросъемка - 2Мп, видеосъемка 8K/30fps, 4K/60fps, 1080p/60fps, cелфи камера - 8Мп.\nАккумулятор и зарядка: 4500 мАч, быстрая зарядка - 99% за 30 минут, разъём - USB-C.\nРазмеры: 170.5x78.3x9.5 мм, вес - 215 г.\nЦена:60000 руб.`];

burgerButton.addEventListener("click",()=> {burgerNav.style.display="block";})

// document.onload=about_section.style.visibility="hidden";

// function improveFighters() {
//     for(let i=0;i<fighters.length;i++) {
        
//         fighters[i].firstChild.addEventListener("click",(e)=>{});
       

//         if(fighters[i].hasAttribute("data-jones")) {
//             fighters[i].firstChild.addEventListener("click", (e)=> {about_section.style.visibility="visible";openCode(jon_text);img_stat.setAttribute("src","./images/jon_stat.png");info.innerHTML="";});
//             fighters[i].addEventListener("mouseover",(e)=>{e.target.style.cssText="background-image:url('./images/Jones_improved.png');background-size:cover;background-color: gold;border-color:rgba(161, 147, 19, 0.8);"});
//             fighters[i].addEventListener("mouseout",(e)=>{e.target.style.cssText=null;fighters[i].firstChild.style.cssText=null});
//         }
        
//         else if(fighters[i].hasAttribute("data-conor")) {
//             fighters[i].firstChild.addEventListener("click",(e)=>{about_section.style.visibility="visible";openCode(mac_text);img_stat.setAttribute("src","./images/conor_stat.png");info.innerHTML="";});
//             fighters[i].addEventListener("mouseover",(e)=>{e.target.style.cssText="background-image:url('./images/conor_improved.png');background-size:cover;background-color: gold;border-color:rgba(161, 147, 19, 0.8);"});
//             fighters[i].addEventListener("mouseout",(e)=>{e.target.style.cssText=null;fighters[i].firstChild.style.cssText=null});
//         }
//         else if(fighters[i].hasAttribute("data-israel")) {
//             fighters[i].firstChild.addEventListener("click",(e)=>{about_section.style.visibility="visible";openCode(israel_text);img_stat.setAttribute("src","./images/israel_stat.png");info.innerHTML="";});
//             fighters[i].addEventListener("mouseover",(e)=>{e.target.style.cssText="background-image:url('./images/israel_improved.png');background-size:cover;background-color: gold;border-color:rgba(161, 147, 19, 0.8);"});
//             fighters[i].addEventListener("mouseout",(e)=>{e.target.style.cssText=null;fighters[i].firstChild.style.cssText=null});
//         }
//         else if(fighters[i].hasAttribute("data-petr")) {
//             fighters[i].firstChild.addEventListener("click",(e)=>{about_section.style.visibility="visible";openCode(petr_text);img_stat.setAttribute("src","./images/petr_stat.png");info.innerHTML="";});
//             fighters[i].addEventListener("mouseover",(e)=>{e.target.style.cssText="background-image:url('./images/petr_improved.png');background-size:cover;background-color: gold;border-color:rgba(161, 147, 19, 0.8);"});
//             fighters[i].addEventListener("mouseout",(e)=>{e.target.style.cssText=null;fighters[i].firstChild.style.cssText=null});
//         }
        
//     }

// }
// improveFighters();
// fighters[0].querySelector("button").addEventListener("click",(e)=>
// {document.body.style.backgroundColor=`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`});Менять цвет фона на рандомный по нажатию на кнопку




function writeCode(text_name) { 
        let increment = 0;
        let interval_ID = setInterval(()=>{
                info_text.textContent += text_name[0][increment]
                increment++;
                
                if (info_text.textContent.length >= text_name[0].length) {
                        clearInterval(interval_ID);
                        
                }
        },10)
        
}


for (let i = 0; i < element_Buttons.length; i++) {
        element_Buttons[i].addEventListener("click",(e)=>{about_section.style.display="block"})

        if (element_Buttons[i].hasAttribute("data-Xiaomi-Redmi-Note-11S")) {
                element_Buttons[i].addEventListener("click",()=>{writeCode(Xiaomi_Redmi_Note_11s)})
        }
        if (element_Buttons[i].hasAttribute("data-Apple-iPhone-14-pro")) {
                element_Buttons[i].addEventListener("click",()=>{writeCode(Apple_Iphone_14_Pro)})
        }
         if (element_Buttons[i].hasAttribute("data-Samsung-Galaxy-Z-Fold-4")) {
                 element_Buttons[i].addEventListener("click",()=>{writeCode(Samsung_Galaxy_Z_Fold_4)})
         }
         if (element_Buttons[i].hasAttribute("data-Samsung-Galaxy-S-22")) {
                 element_Buttons[i].addEventListener("click",()=>{writeCode(Samsung_Galaxy_S_22)})
         }
         if (element_Buttons[i].hasAttribute("data-Xiaomi-12T-Pro")) {
                 element_Buttons[i].addEventListener("click",()=>{writeCode(Xiaomi_12T_Pro)})
         }
         if (element_Buttons[i].hasAttribute("data-Asus-Rog-Phone-6-Pro")) {
                 element_Buttons[i].addEventListener("click",()=>{writeCode(Asus_Rog_Phone_6_Pro)})
         }
         if (element_Buttons[i].hasAttribute("data-Motorola-Razr-2022")) {
                 element_Buttons[i].addEventListener("click",()=>{writeCode(Motorola_Razr_2022)})
         }
         if (element_Buttons[i].hasAttribute("data-Huawei-Mate-50-Pro")) {
                element_Buttons[i].addEventListener("click",()=>{writeCode(Huawei_Mate_50_Pro)})
        }
        if (element_Buttons[i].hasAttribute("data-Xiaomi-12S-Ultra")) {
                element_Buttons[i].addEventListener("click",()=>{writeCode(Xiaomi_12S_Ultra)})
        }
        if (element_Buttons[i].hasAttribute("data-ZTE-Nubia-Red-Magic-7")) {
                element_Buttons[i].addEventListener("click",()=>{writeCode(ZTE_Nubia_Red_Magic_7)})
        }
}