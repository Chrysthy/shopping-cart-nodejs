//Caso de uso: Carrinho de compras

// -> adiciona item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}


// -> calcular o total
async function calculateTotal(userCart) {

    console.log("\nShopping cart total is:");

    const result = userCart.reduce((total, item) =>
        total + item.subtotal(), 0);

    console.log(`Total 💲 ${result}`);

}

// -> deleta item no carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name)

    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

// -> remover um item - diminui um item
async function removeItem(userCart, index) {

}

async function displayCart(userCart) {

    console.log("Shopping Cart List:");

    userCart.forEach((item, index) => {

        console.log(`\n ${index + 1}.${item.name} - R$ ${item.price} | ${item.quantity}X | Subtotal: R$ ${item.subtotal()}`);

    })
}

export { addItem, calculateTotal, displayCart, deleteItem, removeItem };