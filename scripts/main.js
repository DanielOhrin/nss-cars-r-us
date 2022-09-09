import { refreshHTML } from "./CarsAreUs.js"

refreshHTML()

document.addEventListener("stateChanged", e => {
    console.log(`State of data has changed. Regenerating HTML...`)
    
    refreshHTML()
}) //* (See database.js) -- 7.

