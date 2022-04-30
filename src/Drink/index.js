import {Layer} from '../Layer';
import './style.css';


export const Drink = (props) => {
  const { name, ordered, layers, image } = props

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

  return drinkDiv
}

