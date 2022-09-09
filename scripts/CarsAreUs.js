import { Wheels } from "./Wheels.js"
import { Technologies } from "./Technologies.js"
import { Paints } from "./Paints.js"
import { Interiors } from "./Interiors.js"
import { Orders } from "./Orders.js"
import { addCustomOrder } from "./database.js"
export const refreshHTML = () => {
    const mainContainer = document.querySelector(`#container`)
    
    const html = `
    <h1>Cars 'R Us: Personal Car Builder</h1>
    <div id="options">
        <section id="paints">  
            ${Paints()}
        </section>
        <section id="interior">
            ${Interiors()}
        </section>
        <section id="wheels">
            ${Wheels()}
        </section>
        <section id="technology">
            ${Technologies()}
        </section>
    </div>
    <button id="order-btn">Place Car Order</button>
    <hr style="opacity: 0%;">
    <section id="orders">
        ${Orders()}
    </section>`

    mainContainer.innerHTML = html
}

document.addEventListener(
    "click",
    e => {
        if (e.target.id === "order-btn") {
            addCustomOrder()
        }
    }
) // Adds order to HTML when the button is clicked