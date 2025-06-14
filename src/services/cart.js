//Caso de uso: Carrinho de compras

// -> adiciona item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}


// -> calcular o total
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) =>
        total + item.subtotal(), 0);

    console.log(result);
    
}

// -> deleta item no carrinho
async function deleteItem(userCart, name) {

}

// -> remover um item - diminui um item
async function removeItem(userCart, index) {

}

export { addItem, calculateTotal, deleteItem, removeItem };