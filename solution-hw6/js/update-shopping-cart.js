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

//return the individual item price for each item in the cart
function itemPrice(basePrice,rollGlazing,packSize) {
    //let itemPrice = ((basePrice + glazing[rollGlazing]) * packing[packSize]);
    let glazingPrice = glazing[rollGlazing] || 0;  // Use 0 if rollGlazing is not found
    let packingPrice = packing[packSize] || 0;  // Use 0 if packSize is not found
    let itemPrice = ((basePrice + glazingPrice) * packingPrice);
    return itemPrice;
}

//given class with role
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        this.itemPrice = itemPrice(basePrice, rollGlazing, packSize);

    }
}

//Check if there is something in local storage (ie. a cart)
let cart = [];

// check if local storage contains something named cart
if (localStorage.getItem("cart") != null) {
   const cartString = localStorage.getItem("cart");
   const cartArray = JSON.parse(cartString);
   for (const cartData of cartArray) {
     const rollInstance = new Roll (cartData.type, cartData.glazing, cartData.size, cartData.basePrice);
     cart.push (rollInstance);
   }
 }

function addToCartDOM(rollInstance) {
    //select the item cart class
    const template = document.querySelector('.item_cart');
    const clone = template.content.cloneNode(true);

    //This line is finding an element with the class "item" inside the cloned content and assigning it to a property element of an object called rollInstance
    rollInstance.element = clone.querySelector('.item');

    //This line is finding an img element inside the rollInstance.element which is a reference to an image associated with a product.
    let cartImg = rollInstance.element.querySelector('img');
    cartImg.src = "../assets/products/" + rolls[rollInstance.type].imageFile;

    let cartText = rollInstance.element.querySelector ('.cart_description_text');
    //This is setting the inner HTML of the element found in the previous line. It's creating a description for a product based on properties of the rolls array and rollInstance object.
    cartText.innerHTML = rolls[rollInstance.type].name + "<br>" +
                      "Glazing: " + rollInstance.glazing + "<br>" +
                      "Pack size: " + rollInstance.size;
    
    let cartPrice = rollInstance.element.querySelector ('.cart_price_text');
    cartPrice.innerHTML = "$" + rollInstance.itemPrice.toFixed(2);

    let cartList = document.querySelector('#cart_list');
    cartList.appendChild(rollInstance.element);
    
    //remove element inside rollInstnace
    rollInstance.element.querySelector(".remove").addEventListener("click", () => {removeCartItem(rollInstance)});
}    

function removeCartItem (rollInstance){
    rollInstance.element.remove();
    // this code removes the roll & all of its attributes from the array
    cart.pop(rollInstance);
    totalPriceDisplay.textContent = "$" + updateTotalPrice().toFixed(2);

    //make the cart array that was stored in the JSON into a string and print it to the console
    const cartArrayString = JSON.stringify(cart);
    localStorage.setItem("cart", cartArrayString);
    console.log(cart); 
}

// this updates the total price of the product
function updateTotalPrice (){
    let totalPrice = 0;
    for (const roll of cart){
        totalPrice += roll.itemPrice;
    }
    return totalPrice;
}

//updates the display of the total price with two variables
totalPriceDisplay = document.querySelector(".numerical");
totalPriceDisplay.textContent = "$" + updateTotalPrice().toFixed(2);

// Add the Rolls to the cart DOM
for (const roll of cart) {
    addToCartDOM(roll);
}