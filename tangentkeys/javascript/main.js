var cartqtElement;
var full;

cartqtElement = this.document.getElementById('cart-quantity'); // Elementet innehåller "1" och ligger ovanför kundvagnen. Den visas när det finns något i kundvagnen.
full = sessionStorage.getItem('cart_full') == 'true'; // Kommer åt cart_full itemet som ligger i klientens lagring. 'cart_full' berättar om det finns något i kundvagnen
if (full) { // om det finns något i kundvagnen
    cartqtElement.hidden = false; // visa 1:an
}
else {
    cartqtElement.hidden = true; // göm 1:an
}

function enterCart() {
    if (full) {     // hoppa till respektive sida beroende på om kundvagnen är tom eller ej (cart.html om kundvagnen innehåller en produkt, cart-empty.html om den är tom)
        window.location = 'cart.html'; 
    }
    else {
        window.location = 'cart-empty.html';
    }
}

function clearCart() { // funktionen körs när man tar bort en produkt från
    sessionStorage.setItem('cart_full', 'false'); // sätter 'cart-full' till 'false'. Kundvagnen blir därmed tom.
}