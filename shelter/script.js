// /*cards----------------------------*/

// for (let serviceBtn of document.querySelectorAll(".service-btns .btn")) {
//   serviceBtn.addEventListener("click", function () {
//     this.classList.toggle("active");
    
//     let k = document.querySelectorAll(".service-btns .btn.active").length;
//     let firstBtn = document.querySelector(".first-btn");
//     let secondBtn = document.querySelector(".second-btn");
//     let thirdBtn = document.querySelector(".third-btn");

//     if (k === 3) {
//       this.classList.toggle("active");
//     }

//     if (k < 3) {
//       for (let card of document.querySelectorAll(".card")) {
//         card.classList.add("blur");
//       }

//       for (let card of document.querySelectorAll(".card")) {
//         if (firstBtn.classList.contains("active") && card.classList.contains("gardens")) {
//           card.classList.remove("blur");
//         } else if (secondBtn.classList.contains("active") && card.classList.contains("lawn")) {
//           card.classList.remove("blur");
//         } else if (thirdBtn.classList.contains("active") && card.classList.contains("planting")) {
//           card.classList.remove("blur");
//         }
//       }
//     }

// if (k === 0) {
//       for (let card of document.querySelectorAll(".card")) {
//         card.classList.remove("blur");
//       }
//     }

//   });
// }

// /*accordion----------------*/
// for (let tab of document.querySelectorAll(".checkbox")) {
//   tab.addEventListener("change", function () {
//     for (let tabs of document.querySelectorAll(".checkbox")) {
//       if (tabs !== tab) {
//         tabs.checked = false;
//       }
//     }
//   });
// }

// /*dropdown----------------*/
// document
//   .querySelector(".select-wrapper")
//   .addEventListener("click", function () {
//     this.querySelector(".select").classList.toggle("open");
//     document.querySelector(".arrow").classList.toggle("opened");
//     if (this.querySelector(".select").classList.contains("open")) {
//       document.querySelector(".city").classList.remove("city-show");
//     }
//   });

// for (let option of document.querySelectorAll(".custom-option")) {
//   option.addEventListener("click", function () {
//     if (!this.classList.contains("selected")) {
//       document.querySelector(".select-wrapper").classList.add("open");
//       document.querySelector(".contacts img").classList.add("open");
//       document.querySelector(".placeholder").classList.add("selected");
//       this.parentNode
//         .querySelector(".custom-option.selected")
//         .classList.remove("selected");
//       this.classList.add("selected");
//       this.closest(".select").querySelector(
//         ".select-trigger span"
//       ).textContent = this.textContent;
//       this.closest(".select")
//         .querySelector(".select-trigger")
//         .classList.add("selected-city");
//       document.querySelector(".arrow").classList.add("opened");

//       var value = this.dataset.value;
//       switch (value) {
//         case "Canandaigua":
//           document.getElementById("city").textContent = "Canandaigua, NY";
//           document.getElementById("phone").textContent = "+1	585	393 0001";
//           document.getElementById("address").textContent =
//             "151 Charlotte Street";
//           document
//             .getElementById("call")
//             .setAttribute("href", "tel:+15853930001");

//           break;
//         case "NY":
//           document.getElementById("city").textContent = "New York City";
//           document.getElementById("phone").textContent = "+1	212	456 0002";
//           document.getElementById("address").textContent = "9 East 91st Street";
//           document
//             .getElementById("call")
//             .setAttribute("href", "tel:+12124560002");
//           break;
//         case "Yonkers":
//           document.getElementById("city").textContent = "Yonkers, NY";
//           document.getElementById("phone").textContent = "+1	914	678 0003";
//           document.getElementById("address").textContent = "511 Warburton Ave";
//           document
//             .getElementById("call")
//             .setAttribute("href", "tel:+19146780003");
//           break;
//         case "Sherrill":
//           document.getElementById("city").textContent = "Sherrill, NY";
//           document.getElementById("phone").textContent = "+1	315	908 0004";
//           document.getElementById("address").textContent = "14 WEST Noyes BLVD";
//           document
//             .getElementById("call")
//             .setAttribute("href", "tel:+1	3159080004");
//           break;
//         default:
//       }
//     }
//     document.querySelector(".city").classList.add("city-show");
//   });
// }

// var options = document.querySelectorAll(".custom-option");
// for (let i of options) {
//   i.addEventListener("mouseover", function () {
//     i.nextElementSibling.classList.add("active-hr");
//   });

//   i.addEventListener("mouseout", function () {
//     i.nextElementSibling.classList.remove("active-hr");
//   });
// }

// /*burger-menu--------------------------*/
// let menuBtn = document.querySelector(".burger-menu");
// let menu = document.querySelector("nav");
// let menuPoints = document.querySelector("ul.nav");
// let overlay = document.getElementById("blanket");
// let closeBtn = document.querySelector(".close-icon img");
// let liMenu = document.querySelectorAll(".menu-link");

// function Overlay() {
//   menu.classList.toggle("active");
//   menuPoints.classList.toggle("active");
//   menuBtn.classList.toggle("active");
//   overlay.classList.toggle("active");
// }
// overlay.addEventListener("click", function () {
//   Overlay();
// });
// menuBtn.addEventListener("click", function () {
//   Overlay();
// });
// closeBtn.addEventListener("click", function () {
//   Overlay();
// });
// for (let k of liMenu) {
//   k.addEventListener("click", function () {
//     Overlay();
//   });
// }

console.log(`1.Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14
2.Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14
3.Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14
4.Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6
5.Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6
6.Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6
7.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20
8.Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции (Примеры неправильной и правильной реализации): +8
9.При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4
10.Верстка обеих страниц валидная: для проверки валидности вёрстки используйте сервис https://validator.w3.org/ : +8`);