import { getWheels, setWheels } from "./database.js"

const wheels = getWheels()

export const Wheels = () => {
    let html = "<h2>Wheels</h2>"
    
    html += `<select id="wheelOptions">`
    html += `<option value="0">Select a wheel package</option>`
    
    const wheelHTML = wheels.map(wheel => {
        return `<option value="${wheel.id}">${wheel.type}</option>`
    })

    html += wheelHTML.join("")
    html += `</select>`

    return html
}

document.addEventListener(
    "change",
    e => {
        if (e.target.id === "wheelOptions") {
            setWheels(parseInt(e.target.value))
        }
    }
)