import { getModels, setModel } from "./database.js"

const models = getModels()

export const Models = () => {
    let html = `<div id="models-div">`

    html += models.map(model => {
        return `
        <input type="radio" name="model" value="${model.id}" />
        <label for="model">${model.type}</label>
        `
    }).join("")

    html += `</div>`
    return html
}

document.addEventListener(
    "change",
    event => {
        if (event.target.name === "model") {
            setModel(parseInt(event.target.value))
        }
    }
)