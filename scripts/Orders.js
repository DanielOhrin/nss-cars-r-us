import { getOrders, getInterior, getPaint, getTechnology, getWheels, Multiply, getModels } from "./database.js"

const models = getModels()

export const Orders = () => {
    const orders = getOrders()
    const interiors = getInterior()
    const paints = getPaint()
    const technologies = getTechnology()
    const wheels = getWheels()
    
    let html = `<h2>Custom Car Orders</h2>`

    let matchingWheel
    let matchingPaint 
    let matchingTechnology
    let matchingInterior

    const ordersHTML = orders.map(order => {
        matchingWheel = wheels.find(wheel => wheel.id === order.wheelsId)
        matchingPaint = paints.find(paint => paint.id === order.paintId)
        matchingTechnology = technologies.find(tech => tech.id === order.technologyId)
        matchingInterior = interiors.find(interior => interior.id === order.interiorId)
        const baseCost = matchingWheel.price + matchingPaint.price + matchingTechnology.price + matchingInterior.price
        const totalCost = Multiply(order.modelId, baseCost)

        const model = models.find(model => model.id === order.modelId).type 
        return `<p id="${order.id}">${matchingPaint.type} ${model} with ${matchingWheel.type} wheels, ${matchingInterior.type} interior, and the ${matchingTechnology.type} for a total cost of ${totalCost.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })}`
    })

    html += ordersHTML
    return html
}