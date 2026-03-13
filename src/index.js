import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"

const myCart = []
const myWishList = []

console.log("Welcome to the your shopee cart!");

const item1 = await createItem("Hotwheels Ferrari", 20.99, 10)
const item2 = await createItem("Hotwheels Lamborghini", 39.99, 3)

await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)

// await cartService.deleteItem(myCart, item2.name)
// await cartService.deleteItem(myCart, item1.name)

console.log("Shopee cart total: ");
await cartService.calculateTotal(myCart)