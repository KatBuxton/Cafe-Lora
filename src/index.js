import './style.css';
import {Layer} from './Layer/index.js';

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

document.querySelectorAll("nav a").forEach((item) => {
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

const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

const cappuccinoElm = document.querySelector(".drink__info")
for (let i = 0; i < layers.length; i += 1) {
cappuccinoElm.innerHTML += Layer(layers[i])
}


