

// dictionary for glazing information
let glazing = {
    "Keep original": 0,
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

// selecting glazing drop down menu
let selectglazing = document.querySelector("#Glazing");
console.log(selectglazing);

// looping to add glazing options
for (const key in glazing) {
    var optionglazing = document.createElement("option");
    optionglazing.text = key;
    optionglazing.value = glazing[key];
    selectglazing.appendChild (optionglazing);
}

// selecting pack size from the drop-down menu
let selectpacksize = document.querySelector("#packSize");


// looping to add packing options
for (const key in packing) {
    var optionpacking = document.createElement("option");
    optionpacking.text = key;
    optionpacking.value = packing[key];
    selectpacksize.appendChild(optionpacking);
}

// base price for the items when they are unedited and allow to compute new values
let glazingPrice = 0.0;
let packPrice = 1;
let basePrice = 0.0;

// create Event Listeners whenever the drop dopwn menus are selected
selectglazing.addEventListener ("change",updateGlazing);
selectpacksize.addEventListener ("change",updatePackSize);

// select the individual price 
let currentPrice = document.getElementsByClassName ("indvPrice");

// update the total price of the items with the pack size and glazing updated
function updateDisplay(rollPrice) {
    let totalPrice = ((basePrice + glazingPrice) * packPrice);
    console.log(totalPrice);
    let roundedTotalPrice = totalPrice.toFixed(2);
    for (let i = 0; i < currentPrice.length; i++) {
        currentPrice[i].textContent = "$" + roundedTotalPrice;
    }
}

// update glazing price variable
function updateGlazing() {
    glazingPrice = parseFloat(selectglazing.value);
    console.log(glazingPrice);
    updateDisplay();
}

// update pack size price
function updatePackSize() {
    packPrice = parseFloat(selectpacksize.value);
    console.log(packPrice);
    updateDisplay();
}

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");
basePrice = rolls[rollType].basePrice;


//how to identify each individual item's name, base price, and image
let header1 = document.querySelector("h1");
let rollName = rolls[rollType].name;
let rollPrice = rolls[rollType].basePrice;
let rollImg = rolls[rollType].imageFile;
header1.textContent = rollName;


//how to identify each individual's price and image 
document.querySelector(".indvPrice").textContent = "$" + rollPrice;
document.querySelector("#detailImg").src = "../assets/products/" + rollImg;


class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

// add items with customizations to console

function addToCartClicked() {
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

    var rollGlazing = selectglazing.options[selectglazing.selectedIndex].text;
    var packSize = selectpacksize.options[selectpacksize.selectedIndex].text;
    const rollInstance = new Roll(rollType, rollGlazing, packSize, rollPrice);
    cart.push(rollInstance);

    //create a string out of the array string that was stored in JSON
    const cartArrayString = JSON.stringify(cart);
    localStorage.setItem("cart", cartArrayString);
    console.log(cart); 
}


