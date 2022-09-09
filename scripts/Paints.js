import { getPaint, setPaint } from "./database.js"

const paints = getPaint()

export const Paints = () => {
    let html = "<h2>Paints</h2>"
    
    html += `<select id="paintOptions">`
    html += `<option value="0">Select a paint package</option>`
    
    const paintHTML = paints.map(paint => {
        return `<option value="${paint.id}">${paint.type}</option>`
    })

    html += paintHTML.join("")
    html += `</select>`

    return html
}

document.addEventListener(
    "change",
    e => {
        if (e.target.id === "paintOptions") {
            setPaint(parseInt(e.target.value))
        }
    }
)