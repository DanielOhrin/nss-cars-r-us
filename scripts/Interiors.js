import { getInterior, setInterior } from "./database.js"

const interiors = getInterior()

export const Interiors = () => {
    let html = "<h2>Interiors</h2>"
    
    html += `<select id="interiorOptions">`
    html += `<option value="0">Select an interior package</option>`
    
    const interiorHTML = interiors.map(interior => {
        return `<option value="${interior.id}">${interior.type}</option>`
    })

    html += interiorHTML.join("")
    html += `</select>`

    return html
}

document.addEventListener(
    "change",
    e => {
        if (e.target.id === "interiorOptions") {
            setInterior(parseInt(e.target.value))
        }
    }
)