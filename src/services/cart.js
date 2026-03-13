async function addItem(userCart, item) {
    userCart.push(item)
}

async function calculateTotal(userCart) {
    console.log("\nShopee cart total: ");

    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(`Total: R$ ${result}`)
}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name  === name)
    if(index !== -1){
        userCart.splice(index, 1)
    }
}

async function removeItem(userCart, index) {
    const deleteIndex = index - 1

    if(index >= 0 && index < userCart.length){
        userCart.splice(deleteIndex, 1)
    }
}

// TODO: adiconar addItem

async function displayCart(userCart) {
    console.log("Shopee cart list: ");
    userCart.forEach((item, index) => {
        console.log(`${index + 1} | ${item.name} | R$ ${item.price} | ${item.quantity}X | Subtotal: R$ ${item.subtotal()}`);
    });
}


export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
}