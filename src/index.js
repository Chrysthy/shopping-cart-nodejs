import createItem  from "./services/item.js";

const cart = [];

console.log("Welcome to the shopping cart system!");

const item1 = await createItem("Silent Hill 2 - Game", 299.99, 1);
const item2 = await createItem("Controle PS5", 399.99, 2);

console.log(item2.subtotal());

