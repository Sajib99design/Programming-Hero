const handleAddProducts = () => {
    const procuct1 = document.getElementById('product');
    const quantity1 = document.getElementById('quantity');
    const procuct = procuct1.value;
    const quantity = parseInt(quantity1.value);

    procuct1.value = '';
    quantity1.value = '';
    displayProduct(procuct, quantity);
    addProductCart(procuct, quantity);
};

const displayProduct = (product, quantity) => {
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;

    // get the ul
    const ul = document.getElementById('products-list');
    ul.appendChild(li);
};

const getCart = () => {
    let cart = {};

    const cartJSON = localStorage.getItem('cart');
    if (cartJSON) {
        cart = JSON.parse(cartJSON);
    }
    console.log(cart);
    return cart;
};



const addProductCart = (procuct, quantity) => {
    const cart = getCart();

    if (cart[procuct]) {
        cart[procuct] = cart[procuct] + quantity;
    }
    else {
        cart[procuct] = quantity;
    }

    const cartJSON = JSON.stringify(cart);
    console.log(cartJSON);

    localStorage.setItem('cart', cartJSON);
};



const displayProductStore = () => {
    const cart = getCart();
    // console.log(cart[product]);
    for (card1 in cart) {
        let products = card1;
        let quantity = cart[card1];
        console.log(products, quantity);
        displayProduct(products, quantity);
    };

};

displayProductStore();
