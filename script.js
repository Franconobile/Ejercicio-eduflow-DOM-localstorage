const pizzas = [
    { id: 0, name: "Margarita", ingredientes: "Muzzarela, huevo, albahaca, jamón", precio: 900 },
    { id: 1, name: "Muzzarela", ingredientes: "Salsa, muzzarela, orégano", precio: 580},
    { id: 2, name: "Brasilera", ingredientes: "Muzzarela, ananá, jamón", precio: 700},
    { id: 3, name: "Napolitana", ingredientes: "Muzzarela, tomate, ajo", precio: 800},
    { id: 4, name: "4 quesos", ingredientes: "Roquefort, muzzarela, provolone, cheddar", precio: 920},
    { id: 5, name: "Jamón y morrón", ingredientes: "Jamón, morrón, salsa", precio: 750} 
]



// Imprimir ID impares:

 let impares = [];

 for (let i = 0; i < pizzas.length; i++){
    if (pizzas[i].id % 2 !== 0){
        impares.push(pizzas[i]);
    }
}  

console.log(`Las pizzas con ID impar: ${impares.filter(impares => impares.id).map(impares => impares.name).join(', ')}`);

// Pizzas que valgan menos de $600 

let precios = [];

for (let i = 0; i < pizzas.length; i++){
    if (pizzas[i].precio < 600) {
        precios.push(pizzas[i])
    }
}

console.log(`Las pizzas de menos de $600 son: ${precios.filter(precios => precios.name).map(precios => precios.name).join(', ')}`);

// Lista de pizzas 

console.log(`Nuestras pizzas son: ${pizzas.filter(pizzas => pizzas.name).map(pizzas => pizzas.name).join(', ')}`);


// Los precios de las pizzas 

console.log(`Precios de las pizzas: ${pizzas.filter(pizzas => pizzas.precio).map(pizzas => pizzas.precio).join(', ')}`);

// Nombre de cada pizza con su precio

pizzas.forEach(pizzas => console.log("La pizza", pizzas.name, ", tiene un valor de: ", "$",pizzas.precio));


// DOM 

const boton = document.getElementById('boton'); 
const tituloPizza = document.getElementById("texto1");
const precioPizza = document.getElementById("texto2");
const ingredientesPizza = document.getElementById("texto3");
const error1 = document.getElementById("error");
const inputNum = document.getElementById("numberFilter");
const spanPizza = document.getElementById('spam');


function buscadorPizzas(){
const value1 = parseInt(inputNum.value);
pizzas.forEach(pizzas => {
    if(value1 === pizzas.id) {
        tituloPizza.innerHTML = pizzas.name;
        precioPizza.innerHTML = '$' + pizzas.precio;
        spanPizza.innerHTML = 'Ingredientes:';
        ingredientesPizza.innerHTML = pizzas.ingredientes;
        error1.innerHTML = '';
    } else if (value1 > 5){
        error1.innerHTML = 'No se encontró la pizza :(';
        tituloPizza.innerHTML = '';
        precioPizza.innerHTML = '';
        spanPizza.innerHTML = '';
        ingredientesPizza.innerHTML = '';
    } else if (value1 < 0){
        error1.innerHTML = 'Por favor ingresa un valor válido';
        tituloPizza.innerHTML = '';
        precioPizza.innerHTML = '';
        spanPizza.innerHTML = '';
        ingredientesPizza.innerHTML = '';
    }
})
} 


boton.addEventListener('click', ()=> {
    buscadorPizzas();
    cambiarImagen();
});

// DOM - Agregar imagenes

const imagenPizza = document.getElementById('pizzaContainer');

function cambiarImagen(){
    const value1 = parseInt(inputNum.value)
    if(value1 === 0){
        imagenPizza.src="./img/pizza_margarita.jpg"
    } else if (value1 === 1){
        imagenPizza.src="./img/pizza_muzzarella.jpg"
    } else if (value1 === 2){
        imagenPizza.src="./img/pizza_brasilena.jpg"
    } else if (value1 === 3){
        imagenPizza.src="./img/pizza_napolitana.jpg"
    } else if (value1 === 4){
        imagenPizza.src="./img/pizza_4_quesos.jpg"
    } else if (value1 === 5){
        imagenPizza.src="./img/pizza_jamon_y_morron.jpg"
    } else if (value1 > 5 ){
        imagenPizza.src="./img/error404pizza.png"
    } else if (value1 < 0 ){
        imagenPizza.src="./img/error404pizza.png"
    } 
}


// Local Storage

function guardar(){
    localStorage.setItem(pizzas, JSON.stringify(pizzas))
}

guardar();