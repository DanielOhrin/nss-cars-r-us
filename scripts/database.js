const database = {
    paint: [
        {
            id: 1,
            type: 'Silver',
            price: 29.99
        },
        {
            id: 2,
            type: 'Midnight Blue',
            price: 39.99
        },
        {
            id: 3,
            type: 'Firebrick Red',
            price: 29.99
        },
        {
            id: 4,
            type: 'Spring Green',
            price: 19.99
        }
    ],

    interior: [
        {
            id: 1,
            type: 'Beige Fabric',
            price: 89.99
        },
        {
            id: 2,
            type: 'Charcoal Fabric',
            price: 99.99
        },
        {
            id: 3,
            type: 'White Leather',
            price: 129.99
        },
        {
            id: 4,
            type: 'Black Leather',
            price: 129.99
        }

    ],

    technology: [
        {
            id: 1,
            type: 'Basic Package',
            price: 99.99
        },
        {
            id: 2,
            type: 'Navigation Package',
            price: 199.99
        },
        {
            id: 3,
            type: 'Visibility Package',
            price: 499.99
        },
        {
            id: 4,
            type: 'Ultra Package',
            price: 699.99
        }

    ],

    wheels: [
        {
            id: 1,
            type: '17-inch Pair Radial',
            price: 69.99
        },
        {
            id: 2,
            type: '17-inch Pair Radial Black',
            price: 79.99
        },
        {
            id: 3,
            type: '18-inch Pair Spoke Silver',
            price: 99.99
        },
        {
            id: 4,
            type: '18-inch Pair Spoke Black',
            price: 119.99
        }
    ],

    customOrders: [
        {
            id: 1,
            paintId: 2,
            interiorId: 4,
            technologyId: 3,
            wheelsId: 3,
            timestamp: 1662654641426
        }
    ],

    newOrder: { //Temporary State Object
        //  paintId
        //  interiorId
        //  technologyId
        //  wheelsId
    }
}

export const getPaint = () => {
    return database.paint.map(paint => ({ ...paint }))
}

export const getInterior = () => {
    return database.interior.map(interior => ({ ...interior }))
}

export const getTechnology = () => {
    return database.technology.map(technology => ({ ...technology }))
}

export const getWheels = () => {
    return database.wheels.map(wheels => ({ ...wheels }))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({ ...order }))
}
export const setPaint = (id) => {
    database.newOrder.paintId = id
}

export const setInterior = (id) => {
    database.newOrder.interiorId = id
}

export const setTechnology = (id) => {
    database.newOrder.technologyId = id
}

export const setWheels = (id) => {
    database.newOrder.wheelsId = id
}

export const addCustomOrder = () => {
    if (database.newOrder !== undefined) {
        if (Object.keys(database.newOrder).length === 4) {
            const newOrder = { ...database.newOrder } // 1.

            const newId = database.customOrders.length // 2.
            newOrder.id = newId + 1

            newOrder.timestamp = Date.now() // 3.

            database.newOrder = {} // 4.

            database.customOrders.push(newOrder) // 5.

            document.dispatchEvent(new CustomEvent("stateChanged")) // 6.

        } else {
            window.alert(`Please fill out the entire form.`)
        }
    }
}

/* 
1. Create copy of object
2. Add unique ID to object
3. Add a timestamp to the object
5. Reset original object
4. Push object to database
6. Dispatch event handler "stateChanged" custom event
7. Create Event Listener in main.js for "stateChanged" (Will Reload HTML Function & Console.log for Proof)
*/
