# Closet Maiev

Closet Maiev es una aplicación web con las herramientas de NodeJs y uso de BootStrap 4 que su objetivo es ventas de ropa, incluyendo un carro de compras.


## Tabla de Contenido

- [Descripción general ](#descripción-general)
  - [El reto](#el-reto)
- [Mi proceso](#Mi-proceso)
  - [Construido con](#construido-con)
  - [Que aprendí](#que-aprendí)
  - [Desarrollo continuo](#desarrollo-continuo)

- [Autor](#autor)

## Descripción general 

Se inicia con: 
```
$ npm run dev
```

para obtener los paquetes necesarios:
```
npm install 
```

## Mi proceso

### Construido con 

- HTML
- CSS
- Boostrap 4
- Nodejs
- JavaScript

### Que aprendí

El uso de Nodejs, para crear una aplicacion web, donde aplico boostrap 4 y modificando a mi gusto algunos estilos del mismo, tratando de llegar a un diseño original y armonico. 
Ademas del diseño, el uso de los includes donde me facilitan la estructura del codigo

```html
<%- include ('partials/navigation.html') %>
```

Y por otro lado, lo mas importante fue el como empezar a crear un carro de compras como añadir al carro.

```js
const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked);
});
```

También de como evitar la manipulacion a traves del input

```js
function quantityChanged(event) {
    const input = event.target;
    input.value <= 0 ? (input.value = 1) : null;
    updateShoppingCartTotal();
}
```
Y de limpiar la compra al presionar el boton de "comprar"

```js
function comprarButtonClicked(){
    shoppingCartItemsContainer.innerHTML = '';
    updateShoppingCartTotal();
}

```

### Desarrollo continuo

Seguir aprendiendo mas de esta tecnologia segun lo que vaya necesitando en el proyecto, una vez que este satisfecho proponerme a mejorar la sintaxis o el codigo que sea mas reutilizable

### Recursos útiles

- [w3schools](https://www.w3schools.com/)
- [StackOverflow](https://stackoverflow.com/) - este es un recurso asombroso. Pude hacer algunas preguntas y obtener comentarios positivos.
- [Youtube](https://www.youtube.com/) - Me sirvio para ver muchas cosas que me resultaban complicadas a la hora de aplicar o entender algo.


## Autor

- LinkedIn - [Sergio Manuel Moreno](https://www.linkedin.com/in/sergiomanuelmoreno0/)
- Frontend Mentor - [@Sergio Moreno](https://www.frontendmentor.io/profile/SergioMMoreno)
- Twitter - [@SoySergio](https://twitter.com/SoyNeroo)
