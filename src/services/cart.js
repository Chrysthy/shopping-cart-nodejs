//Caso de uso: Carrinho de compras

async function displayCart(userCart) {

    console.log("Shopping Cart List:");

    userCart.forEach((item, index) => {

        console.log(`\n ${index + 1}.${item.name} - R$ ${item.price} | ${item.quantity}X | Subtotal: R$ ${item.subtotal()}`);

    })
}


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

    //transforma o indice visual do usuário para o índice do array
    //ex: o usuário vê o índice 1, mas o array começa no índice 0
    const deleteIndex = index - 1;

    //É maior do que zero e menor que o tamanho do carrinho
    if (index >= 0 && index < userCart.length) {

        userCart.splice(deleteIndex, 1);
    }
}


export { addItem, calculateTotal, displayCart, deleteItem, removeItem };