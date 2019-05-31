/* imprimir en consola los numeros del 1 al 100,
los numeros divisibles por 3 tienen que imprimir la palabra "fizz"
los numeros divisibles por 5 tienen que imprimir la palabra "buzz"
los numeros divisibles por 3 y por 5 "fizzbuzz"*/

for (let i = 0; i <= 100; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
        console.log('FizzBuzz');
    } else if (i % 5 == 0) {
        console.log('Buzz');
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else {
        console.log(i);
    }
}

/*hacer una funcion fizzbuzz() que lleve por parametro hasta el cual va a correr el fizzbuzz
tambien las palabras y los numeros que activan esas palabras*/

const fizzBuzz = (numMax, wordOne, wordTwo, numOne, numTwo) => {

    for (let i = 0; i <= numMax; i++) {
        if (i % numOne == 0 && i % numTwo == 0) {
            console.log(wordOne + wordTwo);
        } else if (i % numOne == 0) {
            console.log(wordOne);
        } else if (i % numTwo == 0) {
            console.log(wordTwo);
        } else {
            console.log(i);
        }
    }
};


fizzBuzz(34, 'hola', 'chau', 4, 5);


/* Escribi una función valorStock que tome un arreglo de productos como parametro.
// La función debe devolver un nuevo arreglo con objetos que tengan el nombre
// de cada producto y el valor total del stock.:*/

var productosStock = [{
    name: 'TV LCD',
    price: 100,
    stock: 50
}, {
    name: 'Computadora',
    price: 500,
    stock: 50
}, {
    name: 'Iphone',
    price: 1000,
    stock: 10
}];
// [{ TV LCD: 5000 }, { Computadora: 25000 }]

function valorStock(array) {

    var productosTotal = [];

    for (var i = 0; i < array.length; i++) {

        var productos = {};
        console.log(array[i]);
        productos[array[i]['name']] = array[i]['price'] * array[i]['stock'];
        productosTotal.push(productos);      

    }
    return productosTotal;
}

console.log(valorStock(productosStock));
