const productsInformation = {
    label: 'red noteBook',
    price: 250,
    stock: 100,
    review: 4.2
};


function product({label: productLabel, price, stock, review = 5} = {} ) {
    console.log(productLabel, price, stock, review);
}

product(productsInformation);