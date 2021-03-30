var list = document.getElementById('product-filter');
var allProducts = document.getElementById('all-products-filter');

var products = document.getElementById('all-products');

var filterElems = [];

var keyboards = false;
var cases_plates = false;
var pcbs = false;
var custom_assembly = false;

for (var i = 0; i < list.children.length; i++) {
    changeEvents = list.children.item(i).onchange = (e) => {
        var elem = e.srcElement;
        if (elem.id !== allProducts.id) {
            allProducts.checked = false;
        }
    };
}

window.onload = (e) => {
    allProducts.checked = true;
}