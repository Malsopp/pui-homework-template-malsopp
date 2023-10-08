// dictionary for glazing information
let glazing = {
    "Original": 0,
    "Sugar milk": 0,
    "Vanilla milk": 0.5,
    "Double chocolate": 1.50,
};

// dictionary for packing information
let packing = {
    "1": 1,
    "3": 3,
    "6": 5,
    "12": 10,
};

function itemPrice(basePrice,rollGlazing,packSize) {
    let itemPrice = ((basePrice + glazing[rollGlazing]) * packing[packSize]);
    return itemPrice;
}

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        this.itemPrice = itemPrice(basePrice, rollGlazing, packSize);

    }
}

// Create four new Roll objects and add them to the cart
let roll1 = new Roll("Original", "Sugar milk", "1", 2.49);
let roll2 = new Roll("Walnut", "Vanilla milk", "12", 3.49);
let roll3 = new Roll("Raisin", "Sugar milk", "3", 2.99);
let roll4 = new Roll("Apple", "Original", "3", 3.49);

let cart = new Set([roll1,roll2,roll3,roll4]);

function addToCartDOM(rollInstance) {
    const template = document.querySelector('.item_cart');
    const clone = template.content.cloneNode(true);

    rollInstance.element = clone.querySelector('.item');

    let cartImg = rollInstance.element.querySelector('img');
    cartImg.src = "../assets/products/" + rolls[rollInstance.type].imageFile;

    let cartText = rollInstance.element.querySelector ('.cart_description_text');
    cartText.innerHTML = rolls[rollInstance.type].name + "<br>" +
                      "Glazing: " + rollInstance.glazing + "<br>" +
                      "Pack size: " + rollInstance.size;
    
    let cartPrice = rollInstance.element.querySelector ('.cart_price_text');
    cartPrice.innerHTML = "$" + rollInstance.itemPrice.toFixed(2);

    let cartList = document.querySelector('#cart_list');
    cartList.appendChild(rollInstance.element);

    rollInstance.element.querySelector(".remove").addEventListener("click", () => {removeCartItem(rollInstance)});
}    

function removeCartItem (rollInstance){
    rollInstance.element.remove();
    // this code removes the roll & all of its attributes from the array
    cart.delete(rollInstance);
    totalPriceDisplay.textContent = "$" + updateTotalPrice().toFixed(2);
}

function updateTotalPrice (){
    let totalPrice = 0;
    for (const roll of cart){
        totalPrice += roll.itemPrice;
    }
    return totalPrice;
}

totalPriceDisplay = document.querySelector(".numerical");
totalPriceDisplay.textContent = "$" + updateTotalPrice().toFixed(2);

// Add the Rolls to the cart DOM
for (const roll of cart) {
    addToCartDOM(roll);
}