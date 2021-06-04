// Añadir productos al carrito

const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked);
});

// Boton Comprar
const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);

const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer');

function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest('.item');

    const itemTitle = item.querySelector('.item-title').textContent;
    const itemPrice = item.querySelector('.item-price').textContent;
    const itemImage = item.querySelector('.item-image').src;

    addItemToShoppingCart(itemTitle, itemPrice, itemImage);
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
    // No duplicar producto
    const elementsTitle = shoppingCartItemsContainer.getElementsByClassName('shoppingCartItemTitle');
    for (let i = 0; i < elementsTitle.length; i++) {
        if (elementsTitle[i].innerText === itemTitle) {
            let elementQuantity = elementsTitle[i].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity');
            elementQuantity.value++;
            // Muestra al usuario que se añadio una unidad
            $('.toast').toast('show');
            updateShoppingCartTotal();
            return; // evita que se siga ejecutando y solo aumente la cantidad
        }
    }

    const shoppingCartRow = document.createElement('div');
    const shoppingCartContent = `
    <div class="row shoppingCartItem">
    <div class="col-6">
        <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom border-primary pb-2 pt-3">
            <img src=${itemImage} class="shopping-cart-image">
            <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}
            </h6>
        </div>
    </div>
    <div class="col-2">
        <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom border-primary pb-2 pt-3">
            <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
        </div>
    </div>
    <div class="col-4">
        <div
            class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom border-success pb-2 pt-3">
            <input class="shopping-cart-quantity-input shoppingCartItemQuantity form-control form-control border-info" type="number"
            value="1"></input>    
            <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>
    `;
    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartItemsContainer.append(shoppingCartRow);

    // Boton de borrado de producto
    shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', removeShoppingCartItem);

    // Input - aumentar cantidad
    shoppingCartRow.querySelector('.shoppingCartItemQuantity').addEventListener('change', quantityChanged);

    // Recarga los datos totales
    updateShoppingCartTotal();
}

// Actualizar Precio

function updateShoppingCartTotal(){
    let total = 0;
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

    const shoppingCartItem = document.querySelectorAll('.shoppingCartItem');

    shoppingCartItem.forEach(shoppingCartItem =>{
        const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice');
        // replace cambia el valor a uno vacio y cambio el formato a num
        const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('$', '')); 
        // Cantidad del producto
        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity');

        const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);

        // Total de la compra 
        total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
    });
    // Imprimir por HTML
    shoppingCartTotal.innerHTML = `${total.toFixed(2)}$`;
}

// Borrar producto
function removeShoppingCartItem(event){
    const buttonClicked = event.target;
    buttonClicked.closest('.shoppingCartItem').remove();
    updateShoppingCartTotal();
}

// Evita la maniplacion a traves del input
function quantityChanged(event) {
    const input = event.target;
    input.value <= 0 ? (input.value = 1) : null;
    updateShoppingCartTotal();
}

// Limpia la compra al presionar el boton
function comprarButtonClicked(){
    shoppingCartItemsContainer.innerHTML = '';
    updateShoppingCartTotal();
}