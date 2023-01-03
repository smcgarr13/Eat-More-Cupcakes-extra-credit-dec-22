
// referenced: https://www.youtube.com/watch?v=YeFzkC2awTM

console.log("Oh, hi there!");


if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var addCartItemButtons = document.getElementsByClassName('btn-add')
    console.log(addCartItemButtons);
    for (var i = 0; i < addCartItemButtons.length; i++) {
        var button = addCartItemButtons[i]
        button.addEventListener('click', addCartItem)
    }
     var removeCartItemButtons = document.getElementsByClassName('btn-remove')
    console.log(removeCartItemButtons);
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
    
    var addToCartButtons = document.getElementsByClassName("shop-cupcake-button")
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert ('Thank you for stopping by, enjoy your cupcakes!')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}


function addCartItem(event) {
    var buttonClicked = event.target
        console.log('Button Works!!');
        buttonClicked.parentElement.parentElement.add()
        updateCartTotal()
    }


function removeCartItem(event) {
var buttonClicked = event.target
    console.log('Button Works!!');
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    console.log("Button Works!!");
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-cupcake-flavor')[0].innerText
    var price = shopItem.getElementsByClassName('shop-cupcake-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-cupcake-image')[0].src
    console.log(title, price, imageSrc)
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('You already added this flavor...would you like to try something new?')
            return
        }
    }

    var cartRowContents = `
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
        <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn-remove" type="button">remove</button>
        <button class="btn-add" type="button">add</button>
        </div>`
    
    
    // `
    // <div class="shop-item">
    //     <img class="shop-cupcake-image" src="${imageSrc}">
    // <span class="shop-cupcake-flavor">${title}</span>
    // </div>
    // <span class="shop-cupcake-price">${price}</span>
    // <span class="cart-price cart-column">price</span>
    // <div class="cart-quantity cart-column">quantity</div>
    // <input class="cart-quantity-input" type="number" value="0">
    // <button class="btn-remove" type="button">remove</button>
    // </div>`
    // cartRow.innerHTML = cartRowContents
    // cartItems.append(cartRow)



    // cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
   
    cartRow.getElementsByClassName('btn-remove')[0].addEventListener("click", removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0

    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        console.log(priceElement, quantityElement)
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        console.log(price);
        var quantity = quantityElement.value
        console.log(price * quantity);
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}
