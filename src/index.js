import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
//const myWhishlist = [];

console.log("\nWelcome to the shopping cart system!\n");

const item1 = await createItem("Silent Hill 2 - Game", 299.99, 1);
const item2 = await createItem("Controle PS5", 399.99, 3);
const item3 = await createItem("Cheetos 1kg", 25.99, 2);


await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);


await cartService.displayCart(myCart);


await cartService.deleteItem(myCart, item3.name);
await cartService.displayCart(myCart);


await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item3);


await cartService.displayCart(myCart);


await cartService.calculateTotal(myCart);

