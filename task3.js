"use strict";
const products = [{
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
products.forEach(elements => {
    console.log(elements.price - elements.price * 0.15)
});