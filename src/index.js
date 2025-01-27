import './style.css';
import {Layer} from './Layer/index.js';
import {Drink} from "./Drink/index.js";

console.log('funguju!');

const drinksElm = document.querySelector(".drinks-list")

fetch("https://apps.kodim.cz/daweb/cafelora/api/drinks").then((response) => {
  return response.json();
})
.then((data) => {
  for (let i = 0; i < data.results.length; i += 1) {
    drinksElm.appendChild(Drink(data.results[i]))
  }
});

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

// const drinks = [
//   {
//     id: 'cappuccino',
//     name: 'Cappuccino',
//     ordered: false,
//     layers: [
//       {
//         color: '#feeeca',
//         label: 'mléčná pěna',
//       },
//       {
//         color: '#fed7b0',
//         label: 'teplé mléko',
//       },
//       {
//         color: '#613916',
//         label: 'espresso',
//       },
//     ],
//     image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/cappuccino.png',
//   },
//    {
//     id: 'romano',
//     name: 'Romano',
//     ordered: false,
//     layers: [
//       {
//         color: '#fbdf5b',
//         label: 'citrón',
//       },
//       {
//         color: '#613916',
//         label: 'espresso',
//       },
//     ],
//     image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/romano.png',
//   },
//   ]

// const orderBtn = document.querySelector(".order-btn")

// const drinkElm = document.querySelector(".drink__cup")

// let ordered = false 

// orderBtn.addEventListener("click", () => {
//   if (ordered === false) {
//     ordered = true;
//     drinkElm.classList.add("drink__cup--selected");
//     orderBtn.textContent = "Zrušit";
//   }
//   else {
//     ordered = false;
//     drinkElm.classList.remove("drink__cup--selected");
//     orderBtn.textContent = "Objednat";
//   }
// })

