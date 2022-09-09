import { getTechnology, setTechnology } from "./database.js"

const technologies = getTechnology()

export const Technologies = () => {
    let html = "<h2>Technologies</h2>"
    
    html += `<select id="technologyOptions">`
    html += `<option value="0">Select a technology package</option>`
    
    const technologyHTML = technologies.map(tech => {
        return `<option value="${tech.id}">${tech.type}</option>`
    })

    html += technologyHTML.join("")
    html += `</select>`

    return html
}

document.addEventListener(
    "change",
    e => {
        if (e.target.id === "technologyOptions") {
            setTechnology(parseInt(e.target.value))
        }
    }
)