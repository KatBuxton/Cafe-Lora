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


