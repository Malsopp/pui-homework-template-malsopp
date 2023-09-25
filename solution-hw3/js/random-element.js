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
    "6": 6,
    "12": 12,
};

// selecting glazing drop down menu
let selectglazing = document.querySelector("#Glazing");
console.log(selectglazing);

// looping to add glazing options
for (const key in glazing) {
    var optionglazing = document.createElement("option");
    optionglazing.text = key;
    optionglazing.value = glazing[key];
    selectglazing.appendChild(optionglazing);
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
let basePrice = 2.49;

// create Event Listeners whenever the drop dopwn menus are selected
selectglazing.addEventListener ("change",updateGlazing);
selectpacksize.addEventListener ("change",updatePackSize);

let currentPrice = document.getElementsByClassName ("indvPrice")

function updateTotalPrice() {
    let totalPrice = ((basePrice + glazingPrice) * packPrice);
    let roundedTotalPrice = totalPrice.toFixed(2);
    for (let i = 0; i < currentPrice.length; i++) {
        currentPrice[i].textContent = "$" + roundedTotalPrice;
    }
}

function updateGlazing() {
    glazingPrice = parseFloat(selectglazing.value);
    updateTotalPrice();
}

function updatePackSize() {
    packPrice = parseFloat(selectpacksize.value);
    updateTotalPrice();
}


