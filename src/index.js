import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"

const myCart = []

console.log("Welcome to the your shopee cart!\n");

const item1 = await createItem("Hotwheels Ferrari", 20.99, 2)
const item2 = await createItem("Hotwheels Lamborghini", 39.99, 3)

await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)

await cartService.removeItem(myCart, item2)

await cartService.displayCart(myCart)

await cartService.calculateTotal(myCart)
