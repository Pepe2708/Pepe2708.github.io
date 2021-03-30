var quantity = 1;
var amountLeft = 0;
var price = 160;

var quantityElement;
var priceElement;
var cartqtElement;
var totalCost;


window.onload = function() {
    this.amountLeft = Number(sessionStorage.getItem('amount_left'));  //Deklarerar två variabler för att kunna använda dem på flera sidor och i andra skript.
    this.quantity = Number(sessionStorage.getItem('quantity'));

    if (this.quantity == 0)
        this.quantity = 1;

    if (this.amountLeft == 0) {
        amountLeft = Math.floor((Math.random() * 10) + 1);
    }
    var amountLeftElement = this.document.getElementById("amount-left");
    amountLeftElement.innerHTML = `Only ${amountLeft} left!`;

    this.quantityElement = this.document.getElementById('quantity');
    this.priceElement = this.document.getElementById("price");
    this.totalCost = this.document.getElementById("total-cost");
    this.cartqtElement = document.getElementById('cart-quantity');
    sessionStorage.setItem('amount_left', amountLeft.toString());   //Gör om talet som ska sparas till en string, eftersom sessionStorage bara kan hålla strings.

    price = quantity * 160;

        quantityElement.innerHTML = quantity;
        priceElement.innerHTML = `$${price}`;
        if (totalCost != null)
            totalCost.innerHTML = `Total cost: $${price + 10}`;
};

function increaseQuantity() {
    if (quantity < amountLeft) {
        quantity++;
        price = quantity * 160;

        quantityElement.innerHTML = quantity;
        priceElement.innerHTML = `$${price}`;
        if (totalCost != null)
            totalCost.innerHTML = `Total cost: $${price + 10}`;
        
        sessionStorage.setItem('quantity', quantity.toString());
    }
}

function decreaseQuantity() {
    if  (quantity > 1) {
        quantity--;
        price = quantity * 160;

        quantityElement.innerHTML = quantity;
        priceElement.innerHTML = `$${price}`;
        if (totalCost != null)
            totalCost.innerHTML = `Total cost: $${price + 10}`;

        sessionStorage.setItem('quantity', quantity.toString());
    }
}

function addToCart() {
    sessionStorage.setItem('cart_full', 'true');    //Talar om för webbsidan om det finns någonting i kundvagnen, eller inte
    location.href='cart.html';
}