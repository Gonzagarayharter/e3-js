const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const form = document.getElementById('form');
const input = document.getElementById('input');
const boton = document.getElementById('boton');
const caja = document.getElementById('caja');

const ultimaPizza = JSON.parse(localStorage.getItem("UltimaPizza"));

const saveLocalStorage = (IdPizza) => {
  localStorage.setItem("UltimaPizza", JSON.stringify(IdPizza));
};

const renderPizzas = (pizza) => {
  caja.innerHTML = `<div class="pizza-card">
  <h2 class="pizza-title">${pizza.nombre}</h2>
  <img src="${pizza.imagen}" alt="${pizza.nombre}" class="pizza-image">
  <p class="pizza-price">$${pizza.precio}</p>
  <p class="pizza-description"><span>Ingredientes:</span> ${pizza.ingredientes.join(", ")}</p>
</div>`;
};

const renderPizzaErr = () => {
  caja.innerHTML = `
  <p class="pizza-error"><b>Pizza no encontrada</b>, usted ingreso un valor invalido.<br /> Por favor ingrese un número entre 1 y 5.</p>`
}

const pizzaMatch = (inputId) => {
  const IdPizza = pizzas.find((pizza) => {
  return pizza.id === parseInt(inputId);
});
if (IdPizza) {
  console.log(`Pizza encontrada con ID: ${inputId}`);
  renderPizzas(IdPizza);
  saveLocalStorage(IdPizza);
} else {
  console.log(`Pizza con ID: ${inputId} no encontrado`);
  renderPizzaErr();
  };
};

const submitHandler = (e) => {
  e.preventDefault();
  renderPizzas(ultimaPizza);
  let item = input.value;
  console.dir(item);
  input.value = '';
  pizzaMatch(item);
  caja.style.display = "block";
};

const init = () => {
  form.addEventListener('submit', submitHandler);
};

init();