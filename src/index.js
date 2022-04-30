import './style.css';

console.log('funguju!');

const navBtn = document.querySelector("#nav-btn")
const navElm = document.querySelector("nav")

const toggleMenu = () => {
navElm.classList.toggle("nav-closed");
}
navBtn.addEventListener("click", toggleMenu)

const closeMenu = () => {
  navElm.classList.add("nav-closed");
 }

document.querySelectorAll("a").forEach((item) => {
item.addEventListener("click", closeMenu)
})
const orderBtn = document.querySelector(".order-btn")

const drinkElm = document.querySelector(".drink__cup")

let ordered = false 

orderBtn.addEventListener("click", () => {
  if (ordered === false) {
    ordered = true;
    drinkElm.classList.add("drink__cup--selected");
    orderBtn.textContent = "Zrušit";
  }
  else {
    ordered = false;
    drinkElm.classList.remove("drink__cup--selected");
    orderBtn.textContent = "Objednat";
  }
})



