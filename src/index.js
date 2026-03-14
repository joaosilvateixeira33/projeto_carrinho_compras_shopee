import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"

const myCart = []

console.log("Welcome to the your shopee cart!\n");

const item1 = await createItem("Hotwheels Ferrari", 20.99, 2)
const item2 = await createItem("Hotwheels Lamborghini", 39.99, 3)
const item3 = await createItem("Hotwheels BMW", 10.99, 10)

await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)
await cartService.addItem(myCart, item3)

await cartService.removeItem(myCart, item3)

await cartService.displayCart(myCart)

await cartService.calculateTotal(myCart, "SHOPEE10")
