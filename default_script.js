const container = document.querySelector(".container");
const elements = document.querySelector(".elements");
const element = document.querySelectorAll(".element");
let about_section = document.querySelector(".about");
let img_stat = document.querySelector(".img-stat");
let info = document.querySelector(".info").querySelectorAll("li");
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
let Xiaomi_Redmi_Note_11s = ["MediaTek Helio G96, частота: 2.05ГГц", " AMOLED, диагональ: 6.43', разрешение дисплея: 2400x1080, плотность пикселей - 409 PPI"];

   
function writeCode(text_name) {
        let increment = 0;
        let result = "";
        const interval_ID = setInterval(()=>{
            result += text_name[0][increment];
            increment++;
            info[0].textContent = result;
           if(result.length == text_name[0].length) {
                clearInterval(interval_ID);
                };
        }, 50);
}

writeCode(Xiaomi_Redmi_Note_11s);




