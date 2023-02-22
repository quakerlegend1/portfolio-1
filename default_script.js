const container = document.querySelector(".container");
const elements = document.querySelector(".elements");
const element = document.querySelectorAll(".element");
let about_section = document.querySelector(".about");
let img_stat = document.querySelector(".img-stat");
let info = document.querySelector(".info");
let info_text = info.firstElementChild;
let burgerNav = document.querySelector(".burger-navigation");
let burgerButton = document.querySelector(".burger-menu");
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
let Xiaomi_Redmi_Note_11s = ["Процессор: MediaTek Helio G96, частота: 2.05ГГц. \nДисплей: AMOLED, диагональ: 6.43', разрешение дисплея: 2400x1080, плотность пикселей - 409 PPI. \nКамера: основная камера - 108Мп, сверхширокоугольная - 8Мп с углом обзора в 118°, макросъемка имеется, а также видеосъемка 1080p 1920x1080 30к/с, cелфи камера - 16Мп. \nАккумулятор и зарядка: 5000 мА ч, быстрая зарядка 33Вт, разъём - USB-C. \nРазмеры: 159,87x73,87x8,09 мм, вес - 179 г. \nЦена: 17000 руб."];

   
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

writeCode(Xiaomi_Redmi_Note_11s, 0);



// if(result.length == text_name[0].length) {
//                 clearInterval(interval_ID);
//                 };
