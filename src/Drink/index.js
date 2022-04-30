import {Layer} from '../Layer';
import './style.css';


export const Drink = (props) => {
  const { name, layers, image } = props
  let { ordered } = props

  const drinkDiv = document.createElement("div")
  drinkDiv.classList.add("drink")

  drinkDiv.innerHTML = `
    <div class="drink__product">
      <div class="drink__cup">
        <img src="${image}" />
      </div>
      <div class="drink__info">
        <h3>${name}</h3>
      </div>
    </div>
    <div class="drink__controls">
      <button class="order-btn">Objednat</button>
    </div>
  `
  const drinkInfoElm = drinkDiv.querySelector(".drink__info")

  for (let i = 0; i < layers.length; i += 1) {
    drinkInfoElm.innerHTML += Layer(layers[i])
    }
  
  const orderBtn = drinkDiv.querySelector(".order-btn")
  const drinkElm = drinkDiv.querySelector(".drink__cup")

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

  return drinkDiv
}

