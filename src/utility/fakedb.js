// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = getCart();
    // add quantity
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
    }
 
    localStorage.setItem('company-add', JSON.stringify(shoppingCart));
}


const getCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('company-add');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}


export {
    addToDb,
    getCart,

}
